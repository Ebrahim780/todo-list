import React, { useContext, useState } from 'react';
import { ToDoContext } from '../contexts/ToDoProvider';
import WithResult from '../hoc/WithResult';

const Find = ({ isSerach }) => {
  const { farsi, todos } = useContext(ToDoContext)
  const [result, setResult] = useState([])

  const searchHandler = event => {
    let value = event.target.value.trim()
    let filteredValue = todos.filter(todo => todo.content.toLowerCase().startsWith(value.toLowerCase()))

    setResult(value.length ? filteredValue : [])
  }

  return (
    <div className='find'>
      <div className='searchbar'>
        <button className='btn btn-floating searchbar__button' onClick={isSerach}>❌</button>
        <input type='text'
          className='searchbar__input'
          onChange={searchHandler}
          placeholder={farsi ? 'دنبال چه کاری می گردی؟' : 'What Are you Looking for?'} />
      </div>
      <div className='result'>
        {result.length ?
          result.map(todo => <WithResult todo={todo} key={todo.id} priority={todo.priority} />)
          :
          <p>{farsi ? 'موردی وجود ندارد' : 'There is not any thing'}</p>
        }
      </div>
    </div>
  )
}

export default Find;