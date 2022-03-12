import React from 'react';
import Form from '../components/Form';
import Title from '../components/Title';
import ToDo from '../contexts/ToDo';
import PriorityList from './PriorityList';

const App = () => {
  return (
    <ToDo>
        <Title />
        <Form />
        <PriorityList/>
    </ToDo>
  )
}

export default App;