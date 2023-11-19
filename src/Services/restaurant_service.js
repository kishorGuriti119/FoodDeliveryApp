import {API} from './api';
import Api_Methods from './methods';
import React, {useEffect, useState} from 'react';

export default Restaurant_service = {
  RegisterRestaurant: async (restaurantDetails, token) => {
    try {
      let RegisterRestaurant_Response = await Api_Methods.post(
        API.FDA_Restaurant_Register_Url,
        restaurantDetails,
        token,
      );
      console.log(
        RegisterRestaurant_Response,
        '----- RegisterRestaurant_Response',
      );
      return RegisterRestaurant_Response;
    } catch (error) {
      console.log(error, 'RegisterRestaurant_error');
      throw error;
    }
  },
};
