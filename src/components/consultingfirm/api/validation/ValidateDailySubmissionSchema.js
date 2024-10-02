import * as yup from 'yup';

export const getValidationSchema = () => {
  return yup.object().shape({
    dateOfEntry: yup.date().required('Please select a date.'),
    recruiterName: yup.string().required('Please enter a Recruiter Name.'),
    consultantName: yup.string().required('Please enter a Consultant Name.'),
    technology: yup.string().required('Please enter the Technology.'),
    priority: yup.string().required('Please enter the Priority.'),
    skill: yup.string().required('Please select the skill.'),
    allocatedStatus: yup.string().required('Please select Allocated Status.'),
    clientType: yup.string().required('Please select clientType.'),
    clientName: yup.string().required('Please select clientName.'),
    requirementSource: yup.string().required('Please select requirementSource.'),
    feedback: yup.string().required('Please enter feedback.'),
    comments: yup.string(),
  });
};
