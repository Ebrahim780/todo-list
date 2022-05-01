import React, { useContext, useState } from 'react';
import { ToDoContext } from '../contexts/ToDoProvider';
import Tooltip from './ToolTip';
import pin from '../assets/icon/pin.png';
import edit from '../assets/icon/edit.png';
import remove from '../assets/icon/remove.png';
import checked from '../assets/icon/checked.png';
import unchecked from '../assets/icon/unchecked.png';

const ToDo = ({ priority }) => {
  const [currentContent, setCurrentContent] = useState('')
  const { todos, farsi, dispatch } = useContext(ToDoContext)

  return [
    todos.filter(todo => todo.priority === priority).map(todo =>
      <div className='list__container' key={todo.id}>
        <span
          className={todo.done ? 'list__item done' : 'list__item'}
          onBlur={(event) => setCurrentContent(event.target.innerHTML.replace('&nbsp;', ''))}
          contentEditable={true}
          suppressContentEditableWarning={true}
        >
          {todo.content}
        </span>
        <Tooltip content={farsi ? 'ویرایش' : 'edit'}>
          <img
            className='list__button'
            onClick={() => dispatch({ type: 'UPDATE_TODO', content: currentContent.replace('&nbsp;', ''), id: todo.id })}
            src={edit}
          />
        </Tooltip>
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

export default ToDo;