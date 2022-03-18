import React, { useContext, useState } from 'react';
import { ToDoContext } from '../contexts/ToDoProvider';
import Tooltip from './ToolTip';

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
          <i
            className='material-icons list__button'
            onClick={() => dispatch({ type: 'UPDATE_TODO', content: currentContent.replace('&nbsp;', ''), id: todo.id })}
          >edit</i>
        </Tooltip>
        <Tooltip content={farsi ? 'حذف' : 'delete'}>
          <i
            className='material-icons list__button'
            onClick={() => dispatch({ type: 'REMOVE_TODO', id: todo.id })}>delete</i>
        </Tooltip>
        <Tooltip content={farsi ? 'انجام شد' : 'done'}>
          <i
            className='material-icons list__button'
            onClick={() => dispatch({ type: 'DONE_TODO', id: todo.id })}>
            {todo.done ? 'check_box' : 'check_box_outline_blank'}
          </i>
        </Tooltip>
      </div>
    )]
}

export default ToDo;