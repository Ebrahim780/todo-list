import React, { useContext, useState } from 'react';
import { ToDoContext } from '../contexts/ToDo';
import Tooltip from './ToolTip';

const MediumPriority = () => {
  const { todos, farsi, dispatch } = useContext(ToDoContext)
  const [currentContent, setCurrentContent] = useState('')

  return (
    <div className='col s12 m6 l4'>
      {todos.length ?
        <div className='list card-panel orange'>
          <h5 className='list__header'>{farsi ? 'بهتره انجام بشه' : 'Better to done'}</h5>
          {todos.filter(todo => todo.priority === 'medium').map(todo => {
            return (
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
                    onClick={() => dispatch({ type: 'UPDATE_TODO', content: currentContent.replace('&nbsp;', ''), id: todo.id })}>edit</i>
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
            )
          })}
        </div>
        : null}
    </div>
  )
}

export default MediumPriority;