import RemoveIcon from '../components/Icons/RemoveIcon'
import { useStateContext } from 'contexts/ToDoProvider'
import TodoContent from 'components/TodoContent'
import Tooltip from 'components/ToolTip'
import translate from 'translate/list'
import CheckedIcon from '../components/Icons/CheckedIcon'
import PinIcon from '../components/Icons/PinIcon'

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
        <RemoveIcon onClick={() => deleteTodo(todo.id)} />
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
    </div>
  )
}

export default WithResult
