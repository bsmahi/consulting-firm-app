import * as yup from 'yup';

export const getValidationSchema = () => {
  return yup.object().shape({
    recruiterName: yup.string().required('Please enter a Recruiter Name.'),
    consultantName: yup.string().required('Please enter a Consultant Name.'),
    allocatedStatus: yup.string().required('Please select Allocated Status.'),
    status: yup.string().required('Please select Status.'),
    turboCheck: yup.string().required('Please enter the Turbo Check.'),
    priority: yup.string().required('Please enter the Priority.'),
    technology: yup.string().required('Please enter the Technology.'),
    organization: yup.string().required('Please enter the Organization.'),
    experience: yup.string().required('Please enter the Experience.'),
    location: yup.string().required('Please enter the Location.'),
    reLocation: yup.string().required('Please enter the ReLocation.'),
    modeOfStaying: yup.string().required('Please select Mode Of Staying.'),
    newOrExisting: yup.string().required('Please select New or Existing.'),
    sourceBy: yup.string().required('Please enter the Source By.'),
    visaStatus: yup.string().required('Please enter the Visa Status.'),
    marketingVisaStatus: yup.string().required('Please enter the Marketing Visa Status.'),
    contactNumber: yup.string().required('Please enter the Contact Number.'),
    emailId: yup.string().email('Invalid email format').required('Please enter the Email ID.'),
    originalDOB: yup.date().required('Please enter the Original DOB.').nullable(),
    marketingDOB: yup.date().required('Please enter the Marketing DOB.').nullable(),
    marketingStartDate: yup.date().required('Please enter the Marketing Start Date.').nullable(),
    marketingEndDate: yup.date().required('Please enter the Marketing End Date.').nullable(),
    comments: yup.string(),
  });
};
