import axios from 'axios';

const baseUrl = 'http://localhost:3001/boards';

const getBoard = id => {
  return axios
    .get(`${baseUrl}/${id}`)
    .then(res => {
      return res.data;
    })
    .catch(error => {
      if (error.response) {
        throw error.response;
      }

      if (error.request) {
        throw error.request;
      }

      throw error;
    });
};

export default {
  getBoard
};
