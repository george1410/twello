export default error => {
  if (error.response) {
    throw error.response;
  }

  if (error.request) {
    throw error.request;
  }

  throw error;
};
