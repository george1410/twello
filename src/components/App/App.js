import React from 'react';
import './App.css';
import Column from '../Column/Column';
import Card from '../Card/Card';
import AddColumn from '../AddColumn/AddColumn';

function App() {
  return (
    <div className='App'>
      <Column title='First'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Column>
      <Column title='Second'>
        <Card />
        <Card />
        <Card />
      </Column>
      <Column title='Third'>
        <Card />
        <Card />
        <Card />
      </Column>
      <AddColumn />
    </div>
  );
}

export default App;
