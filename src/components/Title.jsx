import React, { useContext } from 'react';
import { ToDoContext } from '../contexts/ToDo';
import '../styles/title.css';

const Title = () => {
  const { todos, farsi, dispatch } = useContext(ToDoContext);

  return (
    <div className='title'>
      <button
        className='title__button btn'
        onClick={() => dispatch({type: 'SET_LANG'})}
      >
        {farsi ? 'EN' : 'فا'}
      </button>
      {farsi ?
        <div>
          <h4 className='title__header'
          >فهرست کارهای من</h4>
          <p className='title__content'>
            {todos.length ?
              `شما ${todos.length} کار برای انجام دارید`
              :
              `شما کاری برای انجام ندارید :)`
            }
          </p>
        </div>
        :
        <div>
          <h4 className='title__header'>My To Do List</h4>
          <p className='title__content'>
            {todos.length ?
              `You have ${todos.length} works to do`
              :
              `You don't have any work to do :)`
            }
          </p>
        </div>
      }
      <button
        className='title__button btn black'
      >
        {farsi ? 'تاریک' : 'dark'}
      </button>
    </div>
  );
};

export default Title;