import * as yup from 'yup';

export const getValidationSchema = () => {
  return yup.object().shape({
    recruiterName: yup.string().required('Please enter a Recruiter Name.'),
    consultantName: yup.string().required('Please enter a Consultant Name.'),
    client: yup.string().required('Please enter a client name.'),
    dateOfJoin: yup.date().required('Please enter the date of Join.').nullable(),
    contractDuration: yup.string().required('Please enter a contractduration time.'),
    newOrExisting: yup.string().required('Please select New or Existing.'),
    rate: yup.string().required('Please selecta rate.'),
  });
};
