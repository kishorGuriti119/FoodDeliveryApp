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

export const RestaurantOwnerSchema = Yup.object().shape({
  ownerName: Yup.string().required('*required'),
  emailAddress: Yup.string().email('Enter valid Email').required('*required'),
  password: Yup.string()
    .min(8, 'password must be greater than 7 characters')
    .required('*required'),
    contactNumber: Yup.string()
    .matches(/^[0-9]{10}$/, 'Invalid mobile number')
    .required('*required'),
});

export const RestaurantRegistrationSchema = Yup.object().shape({
  restaurantName: Yup.string().required('*required'),
  address: Yup.object().shape({
    locality: Yup.string().required('*required'),
    city: Yup.string().required('City is required'),
    pincode: Yup.string()
      .matches(/^[0-9]{6}$/, 'Invalid pincode')
      .required('Pincode is required'),
    district: Yup.string().required('District is required'),
    state: Yup.string().required('Select state'),
    country: Yup.string()
      .matches(/^(INDIA)$/i, 'Invalid country')
      .required('Country is required'),
  }),
});

export const ForgotPasswordSchema = Yup.object().shape({
  emailAddress: Yup.string().email('Enter valid Email').required('Enter Email'),
});
