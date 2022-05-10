import React, { useContext } from 'react';
import { ToDoContext } from '../contexts/ToDoProvider';

const ToDo = (props) => {
  const { dispatch } = useContext(ToDoContext)
  const { content, id } = props.todo

  return (
    <input type='text'
      value={content}
      className='list__item'
      onChange={event => dispatch({ type: 'UPDATE_TODO', content: event.target.value, id })}
    />
  )
}

export default ToDo;