import React from 'react';
import './App.css';
import Column from '../Column/Column';
import Card from '../Card/Card';

function App() {
  return (
    <div className='App'>
      <Column title='Ready'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Column>
      <Column title='In Progress'>
        <Card />
        <Card />
        <Card />
      </Column>
      <Column title='Impeded'>
        <Card />
        <Card />
        <Card />
      </Column>
      <Column title='Ready for Acceptance'>
        <Card />
        <Card />
        <Card />
      </Column>
      <Column title='Done'>
        <Card />
        <Card />
        <Card />
      </Column>
    </div>
  );
}

export default App;
