import { config } from '../config';
import authHeader from '../helpers/auth-header';
import { commonService } from '../helpers/commonService';

export const seatService = {
    getAllSeats
};

function getAllSeats() {
  return new Promise(async (resolve, reject) => {
    try {
      let header = await authHeader()
      const requestOptions = {
        method: 'GET',
        headers: header
      };
      fetch(`${config.apiUrl}/seats`, requestOptions)
        .then(commonService.handleResponse)
        .then(response => {
          resolve(response.seats);
        })
        .catch((error) => {
          reject(new Error(error));
        });
    } catch (error) {
      reject(new Error(error));
    }
  });
}

