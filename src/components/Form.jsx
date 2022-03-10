import React, { useContext, useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { ToDoContext } from '../contexts/ToDo';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {
  const [currentToDo, setCurrentToDo] = useState('');
  const [priority, setPrtiority] = useState('');
  const { todos, farsi, dispatch } = useContext(ToDoContext);

  const submitHandler = (event) => {
    event.preventDefault()

    if (priority !== '')
      dispatch({
        type: 'ADD_TODO', content: currentToDo.trim(), priority
      })
    else
      toast.warn(farsi ? 'لطفا اولویت را تعیین کنید' : 'Please set the Priority')

    setCurrentToDo('')
  }

  useEffect(() => {
    console.log('todos: ', todos)
  }, [todos])

  return (
    <form className='form' onSubmit={submitHandler}>
      <div className='form__container'>
        <input
          type='text' required className='form__input' tabIndex={1}
          value={currentToDo} onChange={(event) => setCurrentToDo(event.target.value)}
          placeholder={farsi ? 'چه کاری می خوای انجام بدی؟' : 'What do you want to do?'} />
        <button type='submit' className='form__button btn-floating orange' tabIndex={3}>
          <i className='material-icons'>add</i>
        </button>
      </div>
      <div className='form__priority'>
        <select className='browser-default form__select' defaultValue='' tabIndex={2}
          onChange={(event) => setPrtiority(event.target.value)}>
          <option value='' disabled>{farsi ? 'سطح اولویت را تعیین کن' : 'Set the priority level'}</option>
          <option value='low'>{farsi ? 'کم' : 'Low'}</option>
          <option value='medium'>{farsi ? 'متوسط' : 'Medium'}</option>
          <option value='high'>{farsi ? 'زیاد' : 'High'}</option>
        </select>
      </div>
      <ToastContainer position={farsi ? 'top-left' : 'top-right'} rtl={farsi ? true : false} />
    </form>
  )
}

export default Form;