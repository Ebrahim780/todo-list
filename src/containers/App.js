import React from 'react';
import Form from '../components/Form';
import Title from '../components/Title';
import ToDo from '../contexts/ToDo';
import Theme from '../contexts/Theme';
import PriorityList from './PriorityList';

const App = () => {
  return (
    <ToDo>
      <Theme>
        <Title />
        <Form />
        <PriorityList/>
      </Theme>
    </ToDo>
  )
}

export default App;