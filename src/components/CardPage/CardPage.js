import React from 'react';

const CardPage = ({ match }) => {
  return (
    <div>
      <h1>Card page</h1>
      <h2>Card id: {match.params.id}</h2>
    </div>
  );
};

export default CardPage;
