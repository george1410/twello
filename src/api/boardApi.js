import axios from 'axios';
import handleError from './common/handleError';

const baseUrl = 'http://localhost:3001/boards';

const getBoard = id => {
  return axios
    .get(`${baseUrl}/${id}`)
    .then(res => {
      return res.data;
    })
    .catch(error => {
      handleError(error);
    });
};

const postColumn = (boardId, columnName) => {
  return axios
    .post(`${baseUrl}/${boardId}/columns`, { title: columnName })
    .then(res => {
      return res.data;
    })
    .catch(error => {
      handleError(error);
    });
};

const patchColumn = (boardId, columnId, newName) => {
  return axios
    .patch(`${baseUrl}/${boardId}/columns/${columnId}`, { title: newName })
    .then(res => {
      return res.data;
    })
    .catch(error => {
      handleError(error);
    });
};

export default {
  getBoard,
  postColumn,
  patchColumn
};
