import { useStateContext } from 'contexts/ToDoProvider'
import translate from 'translate/header'
import WithResult from 'hoc/WithResult'
import { useState } from 'react'

const Search = ({ isSerach }) => {
	const { lang, todos } = useStateContext()
	const [result, setResult] = useState(todos)

	const searchHandler = event => {
		let value = event.target.value.trim().toLowerCase()
		let filteredValue = todos.filter(todo =>
			todo.content.toLowerCase().includes(value)
		)

		setResult(filteredValue)
	}

	const deleteItemFromResult = id => {
		let filteredResult = result.filter(item => item.id !== id)
		setResult(filteredResult)
	}

	return (
		<div className='search'>
			<div className='search__bar'>
				<button
					className='btn btn-floating search__bar__button'
					onClick={isSerach}>
					❌
				</button>

				<input
					type='text'
					className='searchbar__input'
					onChange={searchHandler}
					placeholder={translate[lang].searchbar}
				/>
			</div>

			<div className='result'>
				{result.length ? (
					result.map(todo => (
						<WithResult
							todo={todo}
							key={todo.id}
							priority={todo.priority}
							deleteItem={deleteItemFromResult}
						/>
					))
				) : (
					<p>{translate[lang].empty}</p>
				)}
			</div>
		</div>
	)
}

export default Search
