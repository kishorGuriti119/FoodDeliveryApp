import {LoginSchema} from './InputValidationSchema';
import {SignUpSchema} from './InputValidationSchema';
import {RestaurantRegistrationSchema} from './InputValidationSchema';
import {RestaurantOwnerSchema} from './InputValidationSchema';
import {ForgotPasswordSchema} from './InputValidationSchema';
import {ResetPasswordSchema} from './InputValidationSchema';
import { AddressSchema } from './InputValidationSchema';

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

export const validateRestaurantOwnerRegistration = async values => {
  try {
    await RestaurantOwnerSchema.validate(values, {abortEarly: false});
    return {isValid: true, errors: {}};
  } catch (errors) {
    const validationErrors = {};
    errors.inner.forEach(error => {
      validationErrors[error.path] = error.message;
    });
    return {isValid: false, errors: validationErrors};
  }
};

export const Validate_restaurant_Registration = async values => {
  try {
    await RestaurantRegistrationSchema.validate(values, {abortEarly: false});
    return {isValid: true, errors: {}};
  } catch (errors) {
    const validationErrors = {};
    errors.inner.forEach(error => {
      validationErrors[error.path] = error.message;
    });
    return {isValid: false, errors: validationErrors};
  }
};

export const ValidateForgotPassword = async values => {
  try {
    await ForgotPasswordSchema.validate(values, {abortEarly: false});
    return {isValid: true, errors: {}};
  } catch (errors) {
    const validationErrors = {};
    errors.inner.forEach(error => {
      validationErrors[error.path] = error.message;
    });
    return {isValid: false, errors: validationErrors};
  }
};

export const Validate_Reset_Password = async values => {
  try {
    await ResetPasswordSchema.validate(values, {abortEarly: false});
    return {isValid: true, errors: {}};
  } catch (errors) {
    const validationErrors = {};
    errors.inner.forEach(error => {
      validationErrors[error.path] = error.message;
    });
    return {isValid: false, errors: validationErrors};
  }
};


export const Validate_UserAddress = async values => {
  try {
    await AddressSchema.validate(values, {abortEarly: false});
    return {isValid: true, errors: {}};
  } catch (errors) {
    const validationErrors = {};
    errors.inner.forEach(error => {
      validationErrors[error.path] = error.message;
    });
    return {isValid: false, errors: validationErrors};
  }
};