import React, { createContext, useEffect, useReducer } from 'react';
import { todoReducer } from '../reducers';

export const ToDoContext = createContext()

const ToDoProvider = (props) => {
  const [state, dispatch] = useReducer(todoReducer, {
    todos: [],
    pinned: {},
    farsi: true
  }, () => {
    const data = localStorage.getItem('state')
    return data ? JSON.parse(data) : { todos: [], pinned: {}, farsi: true }
  })

  useEffect(() => {
    localStorage.setItem('state', JSON.stringify(state))
  }, [state])

  return (
    <ToDoContext.Provider value={{ ...state, dispatch }}>
      <div className='container text-secondary' dir={state.farsi ? 'rtl' : 'ltr'}>
        {props.children}
      </div>
    </ToDoContext.Provider>
  )
}

export default ToDoProvider;