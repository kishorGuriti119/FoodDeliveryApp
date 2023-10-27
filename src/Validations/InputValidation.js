import {LoginSchema} from './InputValidationSchema';
import {SignUpSchema} from './InputValidationSchema';

export const ValidateLogin = async values => {
  try {
    await LoginSchema.validate(values, {abortEarly: false});
    return {isValid: true, errors: {}};
  } catch (errors) {
    const validationErrors = {};
    errors.inner.forEach(error => {
      validationErrors[error.path] = error.message;
    });
    return {isValid: false, errors: validationErrors};
  }
};

export const ValidateSignUp = async values => {
  try {
    await SignUpSchema.validate(values, {abortEarly: false});
    return {isValid: true, errors: {}};
  } catch (errors) {
    const validationErrors = {};
    errors.inner.forEach(error => {
      validationErrors[error.path] = error.message;
    });
    return {isValid: false, errors: validationErrors};
  }
};
