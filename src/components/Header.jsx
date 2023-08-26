import React, { useContext, useState } from 'react'
import { ToDoContext } from 'contexts/ToDoProvider'
import EN from 'assets/icon/en.png'
import FA from 'assets/icon/fa.png'
import SearchIcon from 'assets/icon/search.png'
import Search from './Search'

const Header = () => {
	const { farsi, dispatch } = useContext(ToDoContext)
	const [searching, setSearching] = useState(false)

	searching
		? (document.body.style = 'overflow: hidden')
		: (document.body.style = 'overflow: auto')

	document.onkeydown = event => {
		if (event.key === 'Escape') setSearching(false)
	}

	return (
		<div className='header'>
			<button
				className='header__button btn-floating'
				onClick={() => dispatch({ type: 'SET_LANG' })}>
				<img
					className='header__icon--lang'
					src={farsi ? EN : FA}
					alt='language'
				/>
			</button>
			{farsi ? (
				<h4 className='header__header'>فهرست کارهای من</h4>
			) : (
				<h4 className='header__header'>My To Do List</h4>
			)}
			{searching ? (
				<Search isSerach={() => setSearching(false)} />
			) : (
				<button
					className='btn btn-floating header__search'
					onClick={() => setSearching(true)}>
					<img
						src={SearchIcon}
						alt='Search Todo'
						className='header__search__icon'
					/>
				</button>
			)}
		</div>
	)
}

export default Header
