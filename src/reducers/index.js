import { v4 as uuid } from 'uuid'

export const todoReducer = (state, action) => {
  const copy = [...state.todos]
  const todoFind = copy.find(todo => todo.id === action.id)
  const todoRemain = copy.filter(todo => todo.id !== action.id)
  const todoPinnedFind = copy.find(todo => todo.pinned === true)

  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            content: action.content,
            priority: action.priority,
            done: false,
            pinned: false,
            id: uuid(),
          },
        ],
      }

    case 'UPDATE_TODO':
      todoFind.content = action.content
      return {
        ...state,
        todos: copy,
      }

    case 'DONE_TODO':
      todoFind.done = !todoFind.done
      return {
        ...state,
        todos: copy,
      }

    case 'REMOVE_TODO':
      return {
        ...state,
        todos: todoRemain,
      }

    case 'PIN_TODO':
      if (todoPinnedFind) {
        todoPinnedFind.pinned = false
      }

      todoFind.pinned = true
      return {
        ...state,
        todos: copy,
      }

    case 'UNPIN_TODO':
      todoFind.pinned = false
      return {
        ...state,
        todos: copy,
      }

    case 'SET_LANG_FA':
      return {
        ...state,
        lang: 'fa',
      }

    case 'SET_LANG_EN':
      return {
        ...state,
        lang: 'en',
      }

    default:
      return state
  }
}
