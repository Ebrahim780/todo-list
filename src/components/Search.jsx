import { ToDoContext } from 'contexts/ToDoProvider'
import { useContext, useState } from 'react'
import WithResult from 'hoc/WithResult'

const Search = ({ isSerach }) => {
	const { farsi, todos } = useContext(ToDoContext)
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
					placeholder={
						farsi ? 'دنبال چه کاری می گردی؟' : 'What Are you Looking for?'
					}
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
					<p>{farsi ? 'موردی وجود ندارد' : 'There is not any thing'}</p>
				)}
			</div>
		</div>
	)
}

export default Search
