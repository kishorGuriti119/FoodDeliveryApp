import {API} from './api';
import Api_Methods from './methods';

export default Auth_Api_service = {
  userLogin: async userLoginDetails => {
    try {
      const LoginResponse = await Api_Methods.post(
        API.FDA_User_Auth_Login_Url,
        userLoginDetails,
      );
      return LoginResponse.data;
    } catch (error) {
      throw error.response.data;
    }
  },

  userSignUp: async userSignUpDetails => {
    try {
      let response = await Api_Methods.post(
        API.FDA_User_Auth_Signup_Url,
        userSignUpDetails,
      );
      return response.data;
    } catch (error) {
      throw error.response;
    }
  },
};
