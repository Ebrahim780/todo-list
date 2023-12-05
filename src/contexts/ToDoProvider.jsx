import { createContext, useContext, useEffect, useReducer } from 'react'
import { todoReducer } from 'reducers'

const initialState = {
  todos: [],
  lang: 'fa',
}

export const ToDoContext = createContext()

const ToDoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState, () => {
    const data = localStorage.getItem('state')
    return data ? JSON.parse(data) : initialState
  })

  useEffect(() => {
    localStorage.setItem('state', JSON.stringify(state))
  }, [state])

  return (
    <ToDoContext.Provider value={{ ...state, dispatch }}>
      <div className='container text-secondary' dir='auto'>
        {children}
      </div>
    </ToDoContext.Provider>
  )
}

export default ToDoProvider

export function useStateContext() {
  return useContext(ToDoContext)
}
