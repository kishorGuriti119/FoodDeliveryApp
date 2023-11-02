import * as Yup from 'yup';

export const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Enter valid Email').required('Enter Email'),
  password: Yup.string()
    .min(8, 'Enter valid Password')
    .required('Enter Password'),
});

export const SignUpSchema = Yup.object().shape({
  name: Yup.string().required('*required'),
  emailAddress: Yup.string().email('Enter valid Email').required('*required'),
  password: Yup.string()
    .min(8, 'password must be greater than 7 characters')
    .required('*required'),
    contactNumber: Yup.string()
    .matches(/^[0-9]{10}$/, 'Invalid mobile number')
    .required('*required'),
});



