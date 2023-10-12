import { useStateContext } from 'contexts/ToDoProvider'
import unchecked from 'assets/icon/unchecked.png'
import ImageButton from 'components/ImageButton'
import TodoContent from 'components/TodoContent'
import checked from 'assets/icon/checked.png'
import remove from 'assets/icon/remove.png'
import Tooltip from 'components/ToolTip'
import translate from 'translate/list'
import pin from 'assets/icon/pin.png'

const WithResult = ({ todo, priority, deleteItem }) => {
	const { dispatch, lang } = useStateContext()

	const colors = {
		low: 'green',
		medium: 'orange',
		high: 'red',
	}

	const deleteTodo = id => {
		dispatch({ type: 'REMOVE_TODO', id })
		deleteItem(id)
	}

	return (
		<div className={`card-panel search__result__item ${colors[priority]}`}>
			<TodoContent todo={todo} />

			<Tooltip content={translate[lang].item.delete}>
				<ImageButton
					clicked={() => deleteTodo(todo.id)}
					url={remove}
					alt='delete'
				/>
			</Tooltip>

			<Tooltip content={translate[lang].item.done}>
				<ImageButton
					clicked={() => dispatch({ type: 'DONE_TODO', id: todo.id })}
					url={todo.done ? checked : unchecked}
					alt='done'
				/>
			</Tooltip>

			<Tooltip content={translate[lang].item.pin}>
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
