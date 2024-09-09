import { useEffect, useState } from "react";
import {
    createBenchProfilesApi,
    retrieveAllBenchProfilesApi,
    updateBenchProfileApi,
    deleteBenchProfileApi
}
from "../api/UserDetailsApiService";
import Table from 'react-bootstrap/Table';
import Spinner from 'react-bootstrap/Spinner';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

function BenchProfilesComponent() {
    const [benchProfiles, setBenchProfiles] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [editingProfile, setEditingProfile] = useState(null);

    const getBenchProfiles = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await retrieveAllBenchProfilesApi();
            setBenchProfiles(response.data);
        } catch (error) {
            setError("Failed to fetch bench profiles");
            console.error("Error fetching bench profiles:", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getBenchProfiles();
    }, []);

    const handleEdit = (profile) => {
        setEditingProfile({ ...profile });
        setIsEditing(true);
    };

    const handleAddNew = () => {
        setEditingProfile({
            id: "",
            recruiterName: "",
            consultantName: "",
            allocatedStatus: "",
            status: "",
            turboCheck: "",
            priority: "",
            technology: "",
            organization: "",
            experience: "",
            location: "",
            relocation: "",
            modeOfStaying: "",
            newOrExisting: "",
            sourcedBy: "",
            visaStatus: "",
            marketingVisaStatus: "",
            contactNumber: "",
            emailId: "",
            originalDob: "",
            marketingDob: "",
            whatsappNumber: "",
            marketingStartDate: "",
            marketingEndDate: "",
            comments: ""
        });
        setIsEditing(true);
    };

    const handleSaveEdit = async () => {
        // Prepare the profile data to be sent
        const profileData = {
            recruiterName: editingProfile.recruiterName || '',
            consultantName: editingProfile.consultantName || '',
            allocatedStatus: editingProfile.allocatedStatus || '',
            status: editingProfile.status || '',
            turboCheck: editingProfile.turboCheck || '',
            priority: editingProfile.priority || '',
            technology: editingProfile.technology || '',
            organization: editingProfile.organization || '',
            experience: editingProfile.experience || '',
            location: editingProfile.location || '',
            relocation: editingProfile.relocation || '',
            modeOfStaying: editingProfile.modeOfStaying || '',
            newOrExisting: editingProfile.newOrExisting || '',
            sourcedBy: editingProfile.sourcedBy || '',
            visaStatus: editingProfile.visaStatus || '',
            marketingVisaStatus: editingProfile.marketingVisaStatus || '',
            contactNumber: editingProfile.contactNumber || '',
            emailId: editingProfile.emailId || '',
            originalDob: editingProfile.originalDob || '',
            marketingDob: editingProfile.marketingDob || '',
            whatsappNumber: editingProfile.whatsappNumber || '',
            marketingStartDate: editingProfile.marketingStartDate || '',
            marketingEndDate: editingProfile.marketingEndDate || '',
            comments: editingProfile.comments || ''
        };

        try {
            if (editingProfile.id) {
                // Update existing profile
                await updateBenchProfileApi(editingProfile.id, profileData);
                const updatedProfiles = benchProfiles.map((profile) =>
                    profile.id === editingProfile.id ? { ...profile, ...profileData } : profile
                );
                setBenchProfiles(updatedProfiles);
            } else {
                // Add new profile
                const response = await createBenchProfilesApi(profileData);
                setBenchProfiles([...benchProfiles, response.data]);
            }
        } catch (error) {
            console.error("Error saving profile:", error.response ? error.response.data : error.message);
        }
        setIsEditing(false);
    };

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete?");
        if (confirmDelete) {
            try {
                await deleteBenchProfileApi(id);
                const updatedProfiles = benchProfiles.filter((profile) => profile.id !== id);
                setBenchProfiles(updatedProfiles);
            } catch (error) {
                console.error("Error deleting profile:", error);
            }
        }
    };

    if (isLoading) return <Spinner animation="border" variant="primary" />;
    if (error) return <Spinner animation="grow" variant="danger" />;

    return (
        <div>
            <h1 className="benchprofilesh1">Bench Profiles Details</h1>

            {/* Button to Open the Modal */}
            <Button variant="primary" onClick={handleAddNew} className="mb-3">
                Add New Profile
            </Button>

            <Table striped bordered responsive="sm" size="sm">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Recruiter Name</th>
                        <th>Consultant Name</th>
                        <th>Allocated Status</th>
                        <th>Status</th>
                        <th>TurboCheck</th>
                        <th>Priority</th>
                        <th>Technology</th>
                        <th>Organization</th>
                        <th>Experience</th>
                        <th>Location</th>
                        <th>Relocation</th>
                        <th>ModeOfStaying</th>
                        <th>New or Existing</th>
                        <th>Sourced By</th>
                        <th>Visa Status</th>
                        <th>Marketing Visa Status</th>
                        <th>Contact Number</th>
                        <th>Email ID</th>
                        <th>Original DOB</th>
                        <th>Marketing DOB</th>
                        <th>WhatsApp Number</th>
                        <th>Marketing Start Date</th>
                        <th>Marketing End Date</th>
                        <th>Comments</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {benchProfiles.map((benchprofile) => (
                        <tr key={benchprofile.id}>
                            <td>{benchprofile.id}</td>
                            <td>{benchprofile.recruiterName}</td>
                            <td>{benchprofile.consultantName}</td>
                            <td>{benchprofile.allocatedStatus}</td>
                            <td>{benchprofile.status}</td>
                            <td>{benchprofile.turboCheck}</td>
                            <td>{benchprofile.priority}</td>
                            <td>{benchprofile.technology}</td>
                            <td>{benchprofile.organization}</td>
                            <td>{benchprofile.experience}</td>
                            <td>{benchprofile.location}</td>
                            <td>{benchprofile.relocation}</td>
                            <td>{benchprofile.modeOfStaying}</td>
                            <td>{benchprofile.newOrExisting}</td>
                            <td>{benchprofile.sourcedBy}</td>
                            <td>{benchprofile.visaStatus}</td>
                            <td>{benchprofile.marketingVisaStatus}</td>
                            <td>{benchprofile.contactNumber}</td>
                            <td>{benchprofile.emailId}</td>
                            <td>{benchprofile.originalDob}</td>
                            <td>{benchprofile.marketingDob}</td>
                            <td>{benchprofile.whatsappNumber}</td>
                            <td>{benchprofile.marketingStartDate}</td>
                            <td>{benchprofile.marketingEndDate}</td>
                            <td>{benchprofile.comments}</td>
                            <td>
                                <i
                                    className="bi bi-pencil-square me-3 text-primary"
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => handleEdit(benchprofile)}
                                ></i>
                                <i
                                    className="bi bi-trash text-danger"
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => handleDelete(benchprofile.id)}
                                ></i>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            {isEditing && (
                <Modal show={isEditing} onHide={() => setIsEditing(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>{editingProfile && editingProfile.id ? "Edit Bench Profile" : "Add New Bench Profile"}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            {/* Recruiter Name */}
                            <div>
                                <label>Recruiter Name</label>
                                <input
                                    type="text"
                                    value={editingProfile ? editingProfile.recruiterName : ""}
                                    onChange={(e) =>
                                        setEditingProfile({ ...editingProfile, recruiterName: e.target.value })
                                    }
                                />
                            </div>

                            {/* Consultant Name */}
                            <div>
                                <label>Consultant Name</label>
                                <input
                                    type="text"
                                    value={editingProfile ? editingProfile.consultantName : ""}
                                    onChange={(e) =>
                                        setEditingProfile({ ...editingProfile, consultantName: e.target.value })
                                    }
                                />
                            </div>

                            {/* Allocated Status */}
                            <div>
                                <label>Allocated Status</label>
                                <input
                                    type="text"
                                    value={editingProfile ? editingProfile.allocatedStatus : ""}
                                    onChange={(e) =>
                                        setEditingProfile({ ...editingProfile, allocatedStatus: e.target.value })
                                    }
                                />
                            </div>

                            {/* Status */}
                            <div>
                                <label>Status</label>
                                <input
                                    type="text"
                                    value={editingProfile ? editingProfile.status : ""}
                                    onChange={(e) =>
                                        setEditingProfile({ ...editingProfile, status: e.target.value })
                                    }
                                />
                            </div>

                            {/* TurboCheck */}
                            <div>
                                <label>TurboCheck</label>
                                <input
                                    type="text"
                                    value={editingProfile ? editingProfile.turboCheck : ""}
                                    onChange={(e) =>
                                        setEditingProfile({ ...editingProfile, turboCheck: e.target.value })
                                    }
                                />
                            </div>

                            {/* Priority */}
                            <div>
                                <label>Priority</label>
                                <input
                                    type="text"
                                    value={editingProfile ? editingProfile.priority : ""}
                                    onChange={(e) =>
                                        setEditingProfile({ ...editingProfile, priority: e.target.value })
                                    }
                                />
                            </div>

                            {/* Technology */}
                            <div>
                                <label>Technology</label>
                                <input
                                    type="text"
                                    value={editingProfile ? editingProfile.technology : ""}
                                    onChange={(e) =>
                                        setEditingProfile({ ...editingProfile, technology: e.target.value })
                                    }
                                />
                            </div>

                            {/* Organization */}
                            <div>
                                <label>Organization</label>
                                <input
                                    type="text"
                                    value={editingProfile ? editingProfile.organization : ""}
                                    onChange={(e) =>
                                        setEditingProfile({ ...editingProfile, organization: e.target.value })
                                    }
                                />
                            </div>

                            {/* Experience */}
                            <div>
                                <label>Experience</label>
                                <input
                                    type="text"
                                    value={editingProfile ? editingProfile.experience : ""}
                                    onChange={(e) =>
                                        setEditingProfile({ ...editingProfile, experience: e.target.value })
                                    }
                                />
                            </div>

                            {/* Location */}
                            <div>
                                <label>Location</label>
                                <input
                                    type="text"
                                    value={editingProfile ? editingProfile.location : ""}
                                    onChange={(e) =>
                                        setEditingProfile({ ...editingProfile, location: e.target.value })
                                    }
                                />
                            </div>

                            {/* Relocation */}
                            <div>
                                <label>Relocation</label>
                                <input
                                    type="text"
                                    value={editingProfile ? editingProfile.relocation : ""}
                                    onChange={(e) =>
                                        setEditingProfile({ ...editingProfile, relocation: e.target.value })
                                    }
                                />
                            </div>

                            {/* ModeOfStaying */}
                            <div>
                                <label>ModeOfStaying</label>
                                <input
                                    type="text"
                                    value={editingProfile ? editingProfile.modeOfStaying : ""}
                                    onChange={(e) =>
                                        setEditingProfile({ ...editingProfile, modeOfStaying: e.target.value })
                                    }
                                />
                            </div>

                            {/* New or Existing */}
                            <div>
                                <label>New or Existing</label>
                                <input
                                    type="text"
                                    value={editingProfile ? editingProfile.newOrExisting : ""}
                                    onChange={(e) =>
                                        setEditingProfile({ ...editingProfile, newOrExisting: e.target.value })
                                    }
                                />
                            </div>

                            {/* Sourced By */}
                            <div>
                                <label>Sourced By</label>
                                <input
                                    type="text"
                                    value={editingProfile ? editingProfile.sourcedBy : ""}
                                    onChange={(e) =>
                                        setEditingProfile({ ...editingProfile, sourcedBy: e.target.value })
                                    }
                                />
                            </div>

                            {/* Visa Status */}
                            <div>
                                <label>Visa Status</label>
                                <input
                                    type="text"
                                    value={editingProfile ? editingProfile.visaStatus : ""}
                                    onChange={(e) =>
                                        setEditingProfile({ ...editingProfile, visaStatus: e.target.value })
                                    }
                                />
                            </div>

                            {/* Marketing Visa Status */}
                            <div>
                                <label>Marketing Visa Status</label>
                                <input
                                    type="text"
                                    value={editingProfile ? editingProfile.marketingVisaStatus : ""}
                                    onChange={(e) =>
                                        setEditingProfile({ ...editingProfile, marketingVisaStatus: e.target.value })
                                    }
                                />
                            </div>

                            {/* Contact Number */}
                            <div>
                                <label>Contact Number</label>
                                <input
                                    type="text"
                                    value={editingProfile ? editingProfile.contactNumber : ""}
                                    onChange={(e) =>
                                        setEditingProfile({ ...editingProfile, contactNumber: e.target.value })
                                    }
                                />
                            </div>

                            {/* Email ID */}
                            <div>
                                <label>Email ID</label>
                                <input
                                    type="text"
                                    value={editingProfile ? editingProfile.emailId : ""}
                                    onChange={(e) =>
                                        setEditingProfile({ ...editingProfile, emailId: e.target.value })
                                    }
                                />
                            </div>

                            {/* Original DOB */}
                            <div>
                                <label>Original DOB</label>
                                <input
                                    type="date"
                                    value={editingProfile ? editingProfile.originalDob : ""}
                                    onChange={(e) =>
                                        setEditingProfile({ ...editingProfile, originalDob: e.target.value })
                                    }
                                />
                            </div>

                            {/* Marketing DOB */}
                            <div>
                                <label>Marketing DOB</label>
                                <input
                                    type="date"
                                    value={editingProfile ? editingProfile.marketingDob : ""}
                                    onChange={(e) =>
                                        setEditingProfile({ ...editingProfile, marketingDob: e.target.value })
                                    }
                                />
                            </div>

                            {/* WhatsApp Number */}
                            <div>
                                <label>WhatsApp Number</label>
                                <input
                                    type="text"
                                    value={editingProfile ? editingProfile.whatsappNumber : ""}
                                    onChange={(e) =>
                                        setEditingProfile({ ...editingProfile, whatsappNumber: e.target.value })
                                    }
                                />
                            </div>

                            {/* Marketing Start Date */}
                            <div>
                                <label>Marketing Start Date</label>
                                <input
                                    type="date"
                                    value={editingProfile ? editingProfile.marketingStartDate : ""}
                                    onChange={(e) =>
                                        setEditingProfile({ ...editingProfile, marketingStartDate: e.target.value })
                                    }
                                />
                            </div>

                            {/* Marketing End Date */}
                            <div>
                                <label>Marketing End Date</label>
                                <input
                                    type="date"
                                    value={editingProfile ? editingProfile.marketingEndDate : ""}
                                    onChange={(e) =>
                                        setEditingProfile({ ...editingProfile, marketingEndDate: e.target.value })
                                    }
                                />
                            </div>

                            {/* Comments */}
                            <div>
                                <label>Comments</label>
                                <textarea
                                    value={editingProfile ? editingProfile.comments : ""}
                                    onChange={(e) =>
                                        setEditingProfile({ ...editingProfile, comments: e.target.value })
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

export default BenchProfilesComponent;
