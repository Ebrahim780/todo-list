import React from 'react';
import Title from '../components/Title';
import Form from '../components/Form';
import List from '../components/List';
import ToDoProvider from '../contexts/ToDoProvider';

const App = () => {
  return (
    <ToDoProvider>
      <Title />
      <Form />
      <List />
    </ToDoProvider>
  )
}

export default App;