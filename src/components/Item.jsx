import React, { useContext } from 'react';
import { ToDoContext } from '../contexts/ToDoProvider';
import Tooltip from './ToolTip';
import pin from '../assets/icon/pin.png';
import remove from '../assets/icon/remove.png';
import checked from '../assets/icon/checked.png';
import unchecked from '../assets/icon/unchecked.png';
import ToDo from './ToDo';

const Item = ({ priority }) => {
  const { todos, farsi, dispatch } = useContext(ToDoContext)

  return [
    todos.filter(todo => todo.priority === priority).map(todo =>
      <div className='list__item' key={todo.id}>
        <ToDo todo={todo} />
        <Tooltip content={farsi ? 'حذف' : 'delete'}>
          <img
            className='list__button'
            onClick={() => dispatch({ type: 'REMOVE_TODO', id: todo.id })}
            src={remove}
          />
        </Tooltip>
        <Tooltip content={farsi ? 'انجام شد' : 'done'}>
          <img
            className='list__button'
            onClick={() => dispatch({ type: 'DONE_TODO', id: todo.id })}
            src={todo.done ? checked : unchecked}
          />
        </Tooltip>
        <Tooltip content={farsi ? 'چسباندن' : 'pin'}>
          <img
            className='list__button'
            onClick={() => dispatch({ type: 'PIN_TODO', id: todo.id })}
            src={pin}
          />
        </Tooltip>
      </div>
    )]
}

export default Item;