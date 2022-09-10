import React, { useContext } from 'react'
import ImageButton from 'components/ImageButton'
import ToDo from 'components/ToDo'
import { ToDoContext } from 'contexts/ToDoProvider'
import pin from 'assets/icon/pin.png'
import remove from 'assets/icon/remove.png'
import checked from 'assets/icon/checked.png'
import unchecked from 'assets/icon/unchecked.png'
import Tooltip from 'components/ToolTip'

const WithResult = props => {
  const { dispatch, farsi } = useContext(ToDoContext)

  const priority = {
    low: 'card-panel search__result__item green',
    medium: 'card-panel search__result__item orange',
    high: 'card-panel search__result__item red'
  }

  const deleteTodo = id => {
    dispatch({ type: 'REMOVE_TODO', id })
    props.deleteItem(id)
  }

  return (
    <div className={priority[props.priority]}>
      <ToDo todo={props.todo} />
      <Tooltip content={farsi ? 'حذف' : 'delete'}>
        <ImageButton
          clicked={() => deleteTodo(props.todo.id)}
          url={remove}
          alt='delete' />
      </Tooltip>
      <Tooltip content={farsi ? 'انجام' : 'done'}>
        <ImageButton
          clicked={() => dispatch({ type: 'DONE_TODO', id: props.todo.id })}
          url={props.todo.done ? checked : unchecked}
          alt='done' />
      </Tooltip>
      <Tooltip content={farsi ? 'چسباندن' : 'pin'}>
        <ImageButton
          clicked={() => dispatch({ type: 'PIN_TODO', id: props.todo.id })}
          url={pin}
          alt='pin' />
      </Tooltip>
    </div>
  )
}

export default WithResult