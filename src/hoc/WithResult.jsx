import { ToDoContext } from 'contexts/ToDoProvider'
import unchecked from 'assets/icon/unchecked.png'
import ImageButton from 'components/ImageButton'
import checked from 'assets/icon/checked.png'
import remove from 'assets/icon/remove.png'
import Tooltip from 'components/ToolTip'
import pin from 'assets/icon/pin.png'
import ToDo from 'components/ToDo'
import { useContext } from 'react'

const WithResult = ({ todo, priority, deleteItem }) => {
	const { dispatch, farsi } = useContext(ToDoContext)

	const prioritiesColor = {
		low: 'green',
		medium: 'orange',
		high: 'red',
	}

	const deleteTodo = id => {
		dispatch({ type: 'REMOVE_TODO', id })
		deleteItem(id)
	}

	return (
		<div
			className={`card-panel search__result__item ${prioritiesColor[priority]}`}>
			<ToDo todo={todo} />

			<Tooltip content={farsi ? 'حذف' : 'delete'}>
				<ImageButton
					clicked={() => deleteTodo(todo.id)}
					url={remove}
					alt='delete'
				/>
			</Tooltip>

			<Tooltip content={farsi ? 'انجام' : 'done'}>
				<ImageButton
					clicked={() => dispatch({ type: 'DONE_TODO', id: todo.id })}
					url={todo.done ? checked : unchecked}
					alt='done'
				/>
			</Tooltip>

			<Tooltip content={farsi ? 'چسباندن' : 'pin'}>
				<ImageButton
					clicked={() => dispatch({ type: 'PIN_TODO', id: todo.id })}
					url={pin}
					alt='pin'
				/>
			</Tooltip>
		</div>
	)
}

export default WithResult
