import { useEffect, useState } from "react";
import {
    createDailySubmissionsApi,
    retrieveAllDailySubmissionsApi,
    updateDailySubmissionsApi,
    deleteDailySubmissionsApi
}
from "../api/UserDetailsApiService";
import Table from 'react-bootstrap/Table';
import Spinner from 'react-bootstrap/Spinner';
import { Modal, Button, Pagination, InputGroup, Form } from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs';
import 'bootstrap-icons/font/bootstrap-icons.css';

function DailySubmissionsComponent() {
    const [dailySubmissions, setDailySubmissions] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [editingSubmission, setEditingSubmission] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    // Pagination states
    const [currentPage, setCurrentPage] = useState(1);
    const [submissionsPerPage] = useState(50);

    // Convert all values of the submission object to a string for filtering
    const matchesSearchTerm = (submission) => {
        return Object.values(submission).some((value) =>
            String(value).toLowerCase().includes(searchTerm.toLowerCase())
        );
    };

    const getDailySubmissions = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await retrieveAllDailySubmissionsApi();
            // Sort submissions by id
            const sortedSubmissions = response.data.sort((a, b) => a.id - b.id);
            setDailySubmissions(sortedSubmissions);
        } catch (error) {
            setError("Failed to fetch daily submissions");
            console.error("Error fetching daily submissions:", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getDailySubmissions();
    }, []);

    // Get current submissions
    const indexOfLastSubmission = currentPage * submissionsPerPage;
    const indexOfFirstSubmission = indexOfLastSubmission - submissionsPerPage;
    const currentSubmissions = dailySubmissions.slice(indexOfFirstSubmission, indexOfLastSubmission);

    // Filter submissions based on the search term across all fields
    const filteredSubmissions = currentSubmissions.filter((submission) => matchesSearchTerm(submission));

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const handleEdit = (submission) => {
        setEditingSubmission({ ...submission });
        setIsEditing(true);
    };

    const handleAddNew = () => {
        setEditingSubmission({
            id: "",
            dateOfEntry: "",
            recruiterName: "",
            consultantName: "",
            technology: "",
            priority: "",
            skill: "",
            allocatedStatus: "",
            clientType: "",
            clientName: "",
            requirementSource: "",
            feedback: "",
            comments: ""
        });
        setIsEditing(true);
    };

    const handleSaveEdit = async () => {
        // Prepare the submission data to be sent
        const submissionData = {
            dateOfEntry: editingSubmission.dateOfEntry || '',
            recruiterName: editingSubmission.recruiterName || '',
            consultantName: editingSubmission.consultantName || '',
            technology: editingSubmission.technology || '',
            priority: editingSubmission.priority || '',
            skill: editingSubmission.skill || '',
            allocatedStatus: editingSubmission.allocatedStatus || '',
            clientType: editingSubmission.clientType || '',
            clientName: editingSubmission.clientName || '',
            requirementSource: editingSubmission.requirementSource || '',
            feedback: editingSubmission.feedback || '',
            comments: editingSubmission.comments || ''
        };

        try {
            if (editingSubmission.id) {
                // Update existing submission
                await updateDailySubmissionsApi(editingSubmission.id, submissionData);
                const updatedSubmissions = dailySubmissions.map((submission) =>
                    submission.id === editingSubmission.id ? { ...submission, ...submissionData } : submission
                );
                setDailySubmissions(updatedSubmissions.sort((a, b) => a.id - b.id));
            } else {
                // Add new submission
                const response = await createDailySubmissionsApi(submissionData);
                setDailySubmissions([...dailySubmissions, response.data].sort((a, b) => a.id - b.id));
            }
        } catch (error) {
            console.error("Error saving submission:", error.response ? error.response.data : error.message);
        }
        setIsEditing(false);
    };

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete?");
        if (confirmDelete) {
            try {
                await deleteDailySubmissionsApi(id);
                const updatedSubmissions = dailySubmissions.filter((submission) => submission.id !== id);
                setDailySubmissions(updatedSubmissions);
            } catch (error) {
                console.error("Error deleting submission:", error);
            }
        }
    };

    if (isLoading) return <Spinner animation="border" variant="primary" />;
    if (error) return <Spinner animation="grow" variant="danger" />;

    return (
        <div>
            <h1 className="dailySubmissionsh1">Daily Submissions Details</h1>

            <Form.Group className="mb-3" style={{ textAlign: 'right' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center' }}>
                    <Button
                        variant="primary"
                        onClick={handleAddNew}
                        className="mb-3"
                        style={{
                            height: '38px',
                            lineHeight: '1.5',
                            marginTop: '22px',
                        }}
                    >
                        Add New Submission
                    </Button>
                    <InputGroup style={{ width: '300px' }}>
                        <InputGroup.Text
                            style={{
                                backgroundColor: '#fff',
                                border: '1px solid black',
                                borderRadius: '8px 0 0 8px',
                                padding: '6px 10px',
                                marginLeft: '10px'
                            }}
                        >
                            <BsSearch />
                        </InputGroup.Text>
                        <Form.Control
                            type="text"
                            placeholder="Search Submissions"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            style={{
                                border: '1px solid black',
                                borderRadius: '0 8px 8px 0',
                                fontWeight: 'bold',
                                height: '38px',
                            }}
                        />
                    </InputGroup>
                </div>
            </Form.Group>

            <Table striped bordered responsive="sm" size="sm">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Date of Entry</th>
                        <th>Recruiter Name</th>
                        <th>Consultant Name</th>
                        <th>Technology</th>
                        <th>Priority</th>
                        <th>Skill</th>
                        <th>Allocated Status</th>
                        <th>Client Type</th>
                        <th>Client Name</th>
                        <th>Requirement Source</th>
                        <th>Feedback</th>
                        <th>Comments</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredSubmissions.map((dailySubmission) => (
                        <tr key={dailySubmission.id}>
                            <td>{dailySubmission.id}</td>
                            <td>{dailySubmission.dateOfEntry}</td>
                            <td>{dailySubmission.recruiterName}</td>
                            <td>{dailySubmission.consultantName}</td>
                            <td>{dailySubmission.technology}</td>
                            <td>{dailySubmission.priority}</td>
                            <td>{dailySubmission.skill}</td>
                            <td>{dailySubmission.allocatedStatus}</td>
                            <td>{dailySubmission.clientType}</td>
                            <td>{dailySubmission.clientName}</td>
                            <td>{dailySubmission.requirementSource}</td>
                            <td>{dailySubmission.feedback}</td>
                            <td>{dailySubmission.comments}</td>
                            <td>
                                <i
                                    className="bi bi-pencil-square me-3 text-primary"
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => handleEdit(dailySubmission)}
                                ></i>
                                <i
                                    className="bi bi-trash text-danger"
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => handleDelete(dailySubmission.id)}
                                ></i>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Pagination className="justify-content-center" size="sm">
                {[...Array(Math.ceil(dailySubmissions.length / submissionsPerPage))].map((_, index) => (
                    <Pagination.Item
                        key={index + 1}
                        active={index + 1 === currentPage}
                        onClick={() => paginate(index + 1)}
                    >
                        {index + 1}
                    </Pagination.Item>
                ))}
            </Pagination>


            {isEditing && (
                <Modal show={isEditing} onHide={() => setIsEditing(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>{editingSubmission && editingSubmission.id ? "Edit Daily Submission" : "Add New Daily Submission"}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            {/* Date of Entry */}
                            <div>
                                <label>Date of Entry</label>
                                <input
                                    type="date"
                                    value={editingSubmission ? editingSubmission.dateOfEntry : ""}
                                    onChange={(e) =>
                                        setEditingSubmission({ ...editingSubmission, dateOfEntry: e.target.value })
                                    }
                                />
                            </div>

                            {/* Recruiter Name */}
                            <div>
                                <label>Recruiter Name</label>
                                <input
                                    type="text"
                                    value={editingSubmission ? editingSubmission.recruiterName : ""}
                                    onChange={(e) =>
                                        setEditingSubmission({ ...editingSubmission, recruiterName: e.target.value })
                                    }
                                />
                            </div>

                            {/* Consultant Name */}
                            <div>
                                <label>Consultant Name</label>
                                <input
                                    type="text"
                                    value={editingSubmission ? editingSubmission.consultantName : ""}
                                    onChange={(e) =>
                                        setEditingSubmission({ ...editingSubmission, consultantName: e.target.value })
                                    }
                                />
                            </div>

                            {/* Technology */}
                            <div>
                                <label>Technology</label>
                                <input
                                    type="text"
                                    value={editingSubmission ? editingSubmission.technology : ""}
                                    onChange={(e) =>
                                        setEditingSubmission({ ...editingSubmission, technology: e.target.value })
                                    }
                                />
                            </div>

                            {/* Priority */}
                            <div>
                                <label>Priority</label>
                                <input
                                    type="text"
                                    value={editingSubmission ? editingSubmission.priority : ""}
                                    onChange={(e) =>
                                        setEditingSubmission({ ...editingSubmission, priority: e.target.value })
                                    }
                                />
                            </div>

                            {/* Skill */}
                            <div>
                                <label>Skill</label>
                                <input
                                    type="text"
                                    value={editingSubmission ? editingSubmission.skill : ""}
                                    onChange={(e) =>
                                        setEditingSubmission({ ...editingSubmission, skill: e.target.value })
                                    }
                                />
                            </div>

                            {/* Allocated Status */}
                            <div>
                                <label>Allocated Status</label>
                                <input
                                    type="text"
                                    value={editingSubmission ? editingSubmission.allocatedStatus : ""}
                                    onChange={(e) =>
                                        setEditingSubmission({ ...editingSubmission, allocatedStatus: e.target.value })
                                    }
                                />
                            </div>

                            {/* Client Type */}
                            <div>
                                <label>Client Type</label>
                                <input
                                    type="text"
                                    value={editingSubmission ? editingSubmission.clientType : ""}
                                    onChange={(e) =>
                                        setEditingSubmission({ ...editingSubmission, clientType: e.target.value })
                                    }
                                />
                            </div>

                            {/* Client Name */}
                            <div>
                                <label>Client Name</label>
                                <input
                                    type="text"
                                    value={editingSubmission ? editingSubmission.clientName : ""}
                                    onChange={(e) =>
                                        setEditingSubmission({ ...editingSubmission, clientName: e.target.value })
                                    }
                                />
                            </div>

                            {/* Requirement Source */}
                            <div>
                                <label>Requirement Source</label>
                                <input
                                    type="text"
                                    value={editingSubmission ? editingSubmission.requirementSource : ""}
                                    onChange={(e) =>
                                        setEditingSubmission({ ...editingSubmission, requirementSource: e.target.value })
                                    }
                                />
                            </div>

                            {/* Feedback */}
                            <div>
                                <label>Feedback</label>
                                <input
                                    type="text"
                                    value={editingSubmission ? editingSubmission.feedback : ""}
                                    onChange={(e) =>
                                        setEditingSubmission({ ...editingSubmission, feedback: e.target.value })
                                    }
                                />
                            </div>

                            {/* Comments */}
                            <div>
                                <label>Comments</label>
                                <textarea
                                    value={editingSubmission ? editingSubmission.comments : ""}
                                    onChange={(e) =>
                                        setEditingSubmission({ ...editingSubmission, comments: e.target.value })
                                    }
                                />
                            </div>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setIsEditing(false)}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleSaveEdit}>
                            Save
                        </Button>
                    </Modal.Footer>
                </Modal>
            )}
        </div>
    );
}

export default DailySubmissionsComponent 