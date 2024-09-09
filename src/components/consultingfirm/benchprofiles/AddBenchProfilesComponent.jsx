// import React from 'react';
// import { Button, Form, Row, Col } from 'react-bootstrap';
// import { createBenchProfilesApi } from '../api/UserDetailsApiService';
// import { getValidationSchema } from '../api/validation/ValidateBenchProfileSchema';

// import * as formik from 'formik';

// function AddBenchProfilesComponent() {
//   const { Formik } = formik;

//   const validationSchema = getValidationSchema();

  // const handleSubmit = (values, { setSubmitting }) => {
  //   createBenchProfilesApi(values)
  //     .then((result) => {
  //       console.log(`Submitted Successfully...`, result.status);
  //     })
  //     .catch((error) => console.log(error))
  //     .finally(() => setSubmitting(false));
  // };

//   return (
//     <Formik
//       validationSchema={validationSchema}
//       onSubmit={handleSubmit}
//       initialValues={{
//         recruiterName: '',
//         consultantName: '',
//         allocatedStatus: '',
//         status: '',
//         turboCheck: '',
//         priority: '',
//         technology: '',
//         organization: '',
//         experience: '',
//         location: '',
//         reLocation: '',
//         modeOfStaying: '',
//         newOrExisting: '',
//         sourceBy: '',
//         visaStatus: '',
//         marketingVisaStatus: '',
//         contactNumber: '',
//         emailId: '',
//         originalDOB: null,
//         marketingDOB: null,
//         marketingStartDate: null,
//         marketingEndDate: null,
//         comments: '',
//       }}
//     >
//       {({ handleSubmit, handleChange, values, touched, errors, setFieldValue }) => (
//         <Form noValidate onSubmit={handleSubmit}>
//           <Row className="mb-3">
//             <Form.Group as={Col} md="2" controlId="recruiterName">
//               <Form.Label>Recruiter Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="recruiterName"
//                 value={values.recruiterName}
//                 onChange={handleChange}
//                 isInvalid={touched.recruiterName && !!errors.recruiterName}
//               />
//               <Form.Control.Feedback type="invalid">
//                 {errors.recruiterName}
//               </Form.Control.Feedback>
//             </Form.Group>
//             <Form.Group as={Col} md="2" controlId="consultantName">
//               <Form.Label>Consultant Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="consultantName"
//                 value={values.consultantName}
//                 onChange={handleChange}
//                 isInvalid={touched.consultantName && !!errors.consultantName}
//               />
//               <Form.Control.Feedback type="invalid">
//                 {errors.consultantName}
//               </Form.Control.Feedback>
//             </Form.Group>
//             <Form.Group as={Col} md="2" controlId="allocatedStatus">
//               <Form.Label>Allocated Status</Form.Label>
//               <Form.Select
//                 name="allocatedStatus"
//                 value={values.allocatedStatus}
//                 onChange={handleChange}
//                 isInvalid={touched.allocatedStatus && !!errors.allocatedStatus}>
//                 <option value="">Choose...</option>
//                 <option value="Assigned">Assigned</option>
//                 <option value="Open">Open</option>
//               </Form.Select>
//               <Form.Control.Feedback type="invalid">
//                 {errors.allocatedStatus}
//               </Form.Control.Feedback>
//             </Form.Group>
//             <Form.Group as={Col} md="2" controlId="status">
//               <Form.Label>Status</Form.Label>
//               <Form.Select
//                 name="status"
//                 value={values.status}
//                 onChange={handleChange}
//                 isInvalid={touched.status && !!errors.status}>
//                 <option value="">Choose...</option>
//                 <option value="Active">Active</option>
//                 <option value="New">New</option>
//               </Form.Select>
//               <Form.Control.Feedback type="invalid">
//                 {errors.status}
//               </Form.Control.Feedback>
//             </Form.Group>
//             <Form.Group as={Col} md="2" controlId="turboCheck">
//               <Form.Label>Turbo Check</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="turboCheck"
//                 value={values.turboCheck}
//                 onChange={handleChange}
//                 isInvalid={touched.turboCheck && !!errors.turboCheck}
//               />
//               <Form.Control.Feedback type="invalid">
//                 {errors.turboCheck}
//               </Form.Control.Feedback>
//             </Form.Group>
//             <Form.Group as={Col} md="2" controlId="priority">
//               <Form.Label>Priority</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="priority"
//                 value={values.priority}
//                 onChange={handleChange}
//                 isInvalid={touched.priority && !!errors.priority}
//               />
//               <Form.Control.Feedback type="invalid">
//                 {errors.priority}
//               </Form.Control.Feedback>
//             </Form.Group>
//           </Row>

//           <Row className="mb-3">
//             <Form.Group as={Col} md="2" controlId="technology">
//               <Form.Label>Technology</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="technology"
//                 value={values.technology}
//                 onChange={handleChange}
//                 isInvalid={touched.technology && !!errors.technology}
//               />
//               <Form.Control.Feedback type="invalid">
//                 {errors.technology}
//               </Form.Control.Feedback>
//             </Form.Group>

//             <Form.Group as={Col} md="2" controlId="organization">
//               <Form.Label>Organization</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="organization"
//                 value={values.organization}
//                 onChange={handleChange}
//                 isInvalid={touched.organization && !!errors.organization}
//               />
//               <Form.Control.Feedback type="invalid">
//                 {errors.organization}
//               </Form.Control.Feedback>
//             </Form.Group>

//             <Form.Group as={Col} md="2" controlId="experience">
//               <Form.Label>Experience</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="experience"
//                 value={values.experience}
//                 onChange={handleChange}
//                 isInvalid={touched.experience && !!errors.experience}
//               />
//               <Form.Control.Feedback type="invalid">
//                 {errors.experience}
//               </Form.Control.Feedback>
//             </Form.Group>

//             <Form.Group as={Col} md="2" controlId="location">
//               <Form.Label>Location</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="location"
//                 value={values.location}
//                 onChange={handleChange}
//                 isInvalid={touched.location && !!errors.location}
//               />
//               <Form.Control.Feedback type="invalid">
//                 {errors.location}
//               </Form.Control.Feedback>
//             </Form.Group>
//             <Form.Group as={Col} md="2" controlId="reLocation">
//               <Form.Label>ReLocation</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="reLocation"
//                 value={values.reLocation}
//                 onChange={handleChange}
//                 isInvalid={touched.reLocation && !!errors.reLocation}
//               />
//               <Form.Control.Feedback type="invalid">
//                 {errors.reLocation}
//               </Form.Control.Feedback>
//             </Form.Group>
//             <Form.Group as={Col} md="2" controlId="modeOfStaying">
//               <Form.Label>Mode Of Staying</Form.Label>
//               <Form.Select
//                 name="modeOfStaying"
//                 value={values.modeOfStaying}
//                 onChange={handleChange}
//                 isInvalid={touched.modeOfStaying && !!errors.modeOfStaying}
//               >
//                 <option value="">Choose...</option>
//                 <option value="Guest House">Guest House</option>
//                 <option value="Non-GuestHouse">Non-GuestHouse</option>
//               </Form.Select>
//               <Form.Control.Feedback type="invalid">
//                 {errors.modeOfStaying}
//               </Form.Control.Feedback>
//             </Form.Group>
//           </Row>

//           <Row className="mb-3">
//             <Form.Group as={Col} md="2" controlId="newOrExisting">
//               <Form.Label>New or Existing</Form.Label>
//               <Form.Select
//                 name="newOrExisting"
//                 value={values.newOrExisting}
//                 onChange={handleChange}
//                 isInvalid={touched.newOrExisting && !!errors.newOrExisting}
//               >
//                 <option value="">Choose...</option>
//                 <option value="New">New</option>
//                 <option value="Existing">Existing</option>
//               </Form.Select>
//               <Form.Control.Feedback type="invalid">
//                 {errors.newOrExisting}
//               </Form.Control.Feedback>
//             </Form.Group>

//             <Form.Group as={Col} md="2" controlId="sourceBy">
//               <Form.Label>Source By</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="sourceBy"
//                 value={values.sourceBy}
//                 onChange={handleChange}
//                 isInvalid={touched.sourceBy && !!errors.sourceBy}
//               />
//               <Form.Control.Feedback type="invalid">
//                 {errors.sourceBy}
//               </Form.Control.Feedback>
//             </Form.Group>

//             <Form.Group as={Col} md="2" controlId="visaStatus">
//               <Form.Label>Visa Status</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="visaStatus"
//                 value={values.visaStatus}
//                 onChange={handleChange}
//                 isInvalid={touched.visaStatus && !!errors.visaStatus}
//               />
//               <Form.Control.Feedback type="invalid">
//                 {errors.visaStatus}
//               </Form.Control.Feedback>
//             </Form.Group>
//             <Form.Group as={Col} md="2" controlId="marketingVisaStatus">
//               <Form.Label>Marketing Visa Status</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="marketingVisaStatus"
//                 value={values.marketingVisaStatus}
//                 onChange={handleChange}
//                 isInvalid={touched.marketingVisaStatus && !!errors.marketingVisaStatus}
//               />
//               <Form.Control.Feedback type="invalid">
//                 {errors.marketingVisaStatus}
//               </Form.Control.Feedback>
//             </Form.Group>
//             <Form.Group as={Col} md="2" controlId="contactNumber">
//               <Form.Label>Contact Number</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="contactNumber"
//                 value={values.contactNumber}
//                 onChange={handleChange}
//                 isInvalid={touched.contactNumber && !!errors.contactNumber}
//               />
//               <Form.Control.Feedback type="invalid">
//                 {errors.contactNumber}
//               </Form.Control.Feedback>
//             </Form.Group>
//             <Form.Group as={Col} md="2" controlId="emailId">
//               <Form.Label>Email ID</Form.Label>
//               <Form.Control
//                 type="email"
//                 name="emailId"
//                 value={values.emailId}
//                 onChange={handleChange}
//                 isInvalid={touched.emailId && !!errors.emailId}
//               />
//               <Form.Control.Feedback type="invalid">
//                 {errors.emailId}
//               </Form.Control.Feedback>
//             </Form.Group>
//           </Row>

//           <Row className="mb-3">
//             <Form.Group as={Col} md="2" controlId="originalDOB">
//               <Form.Label>Original DOB</Form.Label>
//               <Form.Control
//                 type="date"
//                 name="originalDOB"
//                 value={values.originalDOB || ''}
//                 onChange={handleChange}
//                 isInvalid={touched.originalDOB && !!errors.originalDOB}
//               />
//               <Form.Control.Feedback type="invalid">
//                 {errors.originalDOB}
//               </Form.Control.Feedback>
//             </Form.Group>

//             <Form.Group as={Col} md="2" controlId="marketingDOB">
//               <Form.Label>Marketing DOB</Form.Label>
//               <Form.Control
//                 type="date"
//                 name="marketingDOB"
//                 value={values.marketingDOB || ''}
//                 onChange={handleChange}
//                 isInvalid={touched.marketingDOB && !!errors.marketingDOB}
//               />
//               <Form.Control.Feedback type="invalid">
//                 {errors.marketingDOB}
//               </Form.Control.Feedback>
//             </Form.Group>
//             <Form.Group as={Col} md="2" controlId="marketingStartDate">
//               <Form.Label>Marketing Start Date</Form.Label>
//               <Form.Control
//                 type="date"
//                 name="marketingStartDate"
//                 value={values.marketingStartDate || ''}
//                 onChange={handleChange}
//                 isInvalid={touched.marketingStartDate && !!errors.marketingStartDate}
//               />
//               <Form.Control.Feedback type="invalid">
//                 {errors.marketingStartDate}
//               </Form.Control.Feedback>
//             </Form.Group>
//             <Form.Group as={Col} md="2" controlId="marketingEndDate">
//               <Form.Label>Marketing End Date</Form.Label>
//               <Form.Control
//                 type="date"
//                 name="marketingEndDate"
//                 value={values.marketingEndDate || ''}
//                 onChange={handleChange}
//                 isInvalid={touched.marketingEndDate && !!errors.marketingEndDate}
//               />
//               <Form.Control.Feedback type="invalid">
//                 {errors.marketingEndDate}
//               </Form.Control.Feedback>
//             </Form.Group>
//             <Form.Group as={Col} md="4" controlId="comments">
//               <Form.Label>Comments</Form.Label>
//               <Form.Control
//                 as="textarea"
//                 rows={2}
//                 name="comments"
//                 value={values.comments}
//                 onChange={handleChange}
//                 isInvalid={touched.comments && !!errors.comments}
//               />
//               <Form.Control.Feedback type="invalid">
//                 {errors.comments}
//               </Form.Control.Feedback>
//             </Form.Group>
//           </Row>

//           <Button variant="primary" type="submit" className="buttontext">
//             Submit
//           </Button>
//         </Form>
//       )}
//     </Formik>
//   );
// }

// export default AddBenchProfilesComponent;
