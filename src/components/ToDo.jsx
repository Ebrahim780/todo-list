import { useStateContext } from 'contexts/ToDoProvider'

const ToDo = ({ todo }) => {
	const { dispatch } = useStateContext()
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
