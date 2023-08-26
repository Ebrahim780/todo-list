import { ToDoContext } from 'contexts/ToDoProvider'
import { useContext } from 'react'

const ToDo = ({ todo }) => {
	const { dispatch } = useContext(ToDoContext)
	const { content, id, done } = todo

	return (
		<input
			type='text'
			value={content}
			className={done ? 'list__item__input done' : 'list__item__input'}
			onChange={event =>
				dispatch({ type: 'UPDATE_TODO', content: event.target.value, id })
			}
		/>
	)
}

export default ToDo
