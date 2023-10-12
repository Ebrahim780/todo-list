import { useStateContext } from 'contexts/ToDoProvider'
import SearchIcon from 'assets/icon/search.png'
import translate from 'translate/header'
import EN from 'assets/icon/en.png'
import FA from 'assets/icon/fa.png'
import { useState } from 'react'
import Search from './Search'

const Header = () => {
	const { lang, dispatch } = useStateContext()
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
				onClick={() =>
					dispatch({ type: `SET_LANG_${lang === 'fa' ? 'EN' : 'FA'}` })
				}>
				<img
					className='header__icon--lang'
					src={lang === 'fa' ? FA : EN}
					alt='language'
				/>
			</button>

			<h4 className='header__title'>{translate[lang].headline}</h4>

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
