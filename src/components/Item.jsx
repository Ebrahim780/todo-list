import React, { useContext } from 'react';
import { ToDoContext } from '../contexts/ToDoProvider';
import ToDo from './ToDo';
import Tooltip from './ToolTip';
import ImageButton from './ImageButton';
import pin from '../assets/icon/pin.png';
import remove from '../assets/icon/remove.png';
import checked from '../assets/icon/checked.png';
import unchecked from '../assets/icon/unchecked.png';

const Item = ({ priority }) => {
  const { todos, farsi, dispatch } = useContext(ToDoContext)

  return [
    todos.filter(todo => todo.priority === priority).map(todo =>
      <div className='list__item' key={todo.id}>
        <ToDo todo={todo} />
        <Tooltip content={farsi ? 'حذف' : 'delete'}>
          <ImageButton
            clicked={() => dispatch({ type: 'REMOVE_TODO', id: todo.id })}
            url={remove}
            alt='delete' />
        </Tooltip>
        <Tooltip content={farsi ? 'انجام شد' : 'done'}>
          <ImageButton
            clicked={() => dispatch({ type: 'DONE_TODO', id: todo.id })}
            url={todo.done ? checked : unchecked}
            alt='done' />
        </Tooltip>
        <Tooltip content={farsi ? 'چسباندن' : 'pin'}>
          <ImageButton
            clicked={() => dispatch({ type: 'PIN_TODO', id: todo.id })}
            url={pin}
            alt='pin' />
        </Tooltip>
      </div>
    )]
}

export default Item;