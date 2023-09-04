import { useStateContext } from 'contexts/ToDoProvider'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import translate from 'translate/form'
import { useState } from 'react'

const Form = () => {
	const [currentToDo, setCurrentToDo] = useState('')
	const [priority, setPrtiority] = useState('')
	const { lang, dispatch } = useStateContext()

	const submitHandler = event => {
		event.preventDefault()

		if (priority === '') toast.warn(translate[lang].warning)
		else if (currentToDo.trim() === '') toast.error(translate[lang].error)
		else
			dispatch({
				type: 'ADD_TODO',
				content: currentToDo.trim(),
				priority,
			})

		setCurrentToDo('')
	}

	return (
		<form
			className='form'
			onSubmit={submitHandler}>
			<div className='form__container'>
				<input
					type='text'
					required
					className='form__input'
					tabIndex={1}
					value={currentToDo}
					onChange={event => setCurrentToDo(event.target.value)}
					placeholder={translate[lang].input}
				/>

				<button
					type='submit'
					className='form__button add btn-floating orange'
					tabIndex={3}>
					+
				</button>
			</div>

			<div className='form__priority'>
				<select
					className='browser-default form__select'
					defaultValue=''
					tabIndex={2}
					onChange={event => setPrtiority(event.target.value)}>
					<option
						value=''
						disabled>
						{translate[lang].select}
					</option>
					<option value='low'>{translate[lang].options.low}</option>
					<option value='medium'>{translate[lang].options.medium}</option>
					<option value='high'>{translate[lang].options.high}</option>
				</select>
			</div>

			<ToastContainer
				position={lang === 'fa' ? 'top-left' : 'top-right'}
				rtl={lang === 'fa' ? true : false}
			/>
		</form>
	)
}

export default Form
