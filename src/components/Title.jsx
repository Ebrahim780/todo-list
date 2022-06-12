import React, { useContext, useState } from 'react';
import { ToDoContext } from '../contexts/ToDoProvider';
import EN from '../assets/icon/en.png';
import FA from '../assets/icon/fa.png';
import SearchIcon from '../assets/icon/search.png'
import Find from './Find';

const Title = () => {
  const { todos, farsi, dispatch } = useContext(ToDoContext)
  const [findMode, setFindMode] = useState(false)

  const changeSearch = () => setFindMode(!findMode)

  return (
    <div className='title'>
      <button className='title__button btn-floating' onClick={() => dispatch({ type: 'SET_LANG' })}>
        <img className='title__icon--lang' src={farsi ? EN : FA} alt="language" />
      </button>
      {farsi ?
        <div>
          <h4 className='title__header'>فهرست کارهای من</h4>
          <p className='title__content'>
            {todos.length ? `شما ${todos.length} کار برای انجام دارید` : `شما کاری برای انجام ندارید :)`}
          </p>
        </div>
        :
        <div>
          <h4 className='title__header'>My To Do List</h4>
          <p className='title__content'>
            {todos.length ? `You have ${todos.length} works to do` : `You don't have any work to do :)`}
          </p>
        </div>
      }
      {
        findMode ?
          <Find isSerach={changeSearch} />
          :
          <button className='btn btn-floating title__search' onClick={changeSearch}>
            <img src={SearchIcon} alt='Find Todo' className='title__search__icon' />
          </button>
      }
    </div>
  )
}

export default Title;