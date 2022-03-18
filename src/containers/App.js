import React, { useState } from 'react';
import Title from '../components/Title';
import Form from '../components/Form';
import List from '../components/List';
import Loading from '../components/Loading';
import ToDoProvider from '../contexts/ToDoProvider';

const App = () => {
  const [loading, setLoading] = useState(true)
  const random = Math.round(Math.random() * 3000)
  
  setTimeout(() => {
    setLoading(false)
  }, random)
  return (
    loading ? <Loading /> :
      <ToDoProvider>
        <Title />
        <Form />
        <List />
      </ToDoProvider>
  )
}

export default App;