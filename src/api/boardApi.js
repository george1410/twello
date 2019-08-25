import axios from 'axios';

const baseUrl = 'http://localhost:3001/boards';

const getBoard = id => {
  return axios.get(`${baseUrl}/${id}`);
};

export default {
  getBoard
};
