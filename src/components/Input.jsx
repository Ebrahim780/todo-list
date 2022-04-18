import React, { useContext, useState } from 'react';
import { ToDoContext } from '../contexts/ToDoProvider';

const Input = (props) => {
  const [currentContent, setCurrentContent] = useState('')
  const { dispatch } = useContext(ToDoContext)

  const editTodo = (value, id) => {
    setCurrentContent(value)
    dispatch({ type: 'UPDATE_TODO', content: currentContent, id })
  }

  return (
    <div>
      <input type="text" value={props.content} onChange={event => editTodo(event.target.value, props.id)} />
    </div>
  )
}

export default Input;