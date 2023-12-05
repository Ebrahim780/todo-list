import { useStateContext } from 'contexts/ToDoProvider'
import CheckedIcon from './Icons/CheckedIcon'
import RemoveIcon from './Icons/RemoveIcon'
import TodoContent from './TodoContent'
import translate from 'translate/list'
import PinIcon from './Icons/PinIcon'
import Tooltip from './ToolTip'

const Todo = ({ todo }) => {
  const { lang, dispatch } = useStateContext()

  return (
    <>
      <TodoContent todo={todo} />

      <Tooltip content={translate[lang].item.delete}>
        <RemoveIcon
          onClick={() => dispatch({ type: 'REMOVE_TODO', id: todo.id })}
        />
      </Tooltip>

      <Tooltip content={translate[lang].item.done}>
        <CheckedIcon
          checked={todo.done}
          onClick={() => dispatch({ type: 'DONE_TODO', id: todo.id })}
        />
      </Tooltip>

      <Tooltip content={translate[lang].item.pin}>
        <PinIcon onClick={() => dispatch({ type: 'PIN_TODO', id: todo.id })} />
      </Tooltip>
    </>
  )
}

export default Todo
