import * as Yup from 'yup';

export const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Enter valid Email').required('Enter Email'),
  password: Yup.string().required('Enter Password'),
});

export const SignUpSchema = Yup.object().shape({
  email: Yup.string().email('Enter valid Email').required('Enter Email'),
  password: Yup.string().required('Enter Password'),
  mobileNumber: Yup.string()
    .matches(/^[0-9]{10}$/, 'Invalid mobile number')
    .required('Mobile number is required'),
});
