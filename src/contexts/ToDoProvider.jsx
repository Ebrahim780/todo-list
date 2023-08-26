import { createContext, useEffect, useReducer } from 'react'
import { todoReducer } from 'reducers'

const initialState = {
	todos: [],
	pinned: {},
	farsi: true,
}

export const ToDoContext = createContext()

const ToDoProvider = props => {
	const [state, dispatch] = useReducer(todoReducer, initialState, () => {
		const data = localStorage.getItem('state')
		return data ? JSON.parse(data) : initialState
	})

	useEffect(() => {
		localStorage.setItem('state', JSON.stringify(state))
	}, [state])

	return (
		<ToDoContext.Provider value={{ ...state, dispatch }}>
			<div
				className='container text-secondary'
				dir='auto'>
				{props.children}
			</div>
		</ToDoContext.Provider>
	)
}

export default ToDoProvider
