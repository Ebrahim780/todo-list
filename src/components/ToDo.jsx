import { useStateContext } from 'contexts/ToDoProvider'
import unchecked from 'assets/icon/unchecked.png'
import checked from 'assets/icon/checked.png'
import remove from 'assets/icon/remove.png'
import TodoContent from './TodoContent'
import ImageButton from './ImageButton'
import translate from 'translate/list'
import pin from 'assets/icon/pin.png'
import Tooltip from './ToolTip'

const Todo = ({ todo }) => {
	const { lang, dispatch } = useStateContext()

	return (
		<>
			<TodoContent todo={todo} />

			<Tooltip content={translate[lang].item.delete}>
				<ImageButton
					clicked={() => dispatch({ type: 'REMOVE_TODO', id: todo.id })}
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
		</>
	)
}

export default Todo
