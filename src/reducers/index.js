import { v4 as uuid } from 'uuid';

export const todoReducer = (state, action) => {
  const copy = [...state.todos]
  const todoIndex = copy.findIndex(todo => todo.id === action.id)
  const todoRemain = copy.filter(todo => todo.id !== action.id)
  const todoFind = copy.find(todo => todo.id === action.id)

  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state, todos: [
          ...state.todos, {
            content: action.content,
            priority: action.priority,
            done: false,
            id: uuid()
          }
        ]
      }

    case 'UPDATE_TODO':
      const todo = copy[todoIndex]
      todo.content = action.content
      return {
        ...state, todos: copy
      }

    case 'DONE_TODO':
      copy[todoIndex].done = !copy[todoIndex].done
      return {
        ...state, todos: copy
      }

    case 'REMOVE_TODO':
      return {
        ...state, todos: todoRemain
      }

    case 'PIN_TODO':
      return {
        ...state, pinned: todoFind
      }

    case 'UNPIN_TODO':
      return {
        ...state, pinned: {}
      }

    case 'SET_LANG':
      return {
        ...state, farsi: !state.farsi
      }

    default: return state
  }
}