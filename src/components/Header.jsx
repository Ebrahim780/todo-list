import { useStateContext } from 'contexts/ToDoProvider'
import SearchIcons from './Icons/SearchIcons'
import translate from 'translate/header'
import FaIcon from './Icons/FaIcon'
import EnIcon from './Icons/EnIcon'
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
        {lang === 'fa' ? <EnIcon /> : <FaIcon />}
      </button>

      <h4 className='header__title'>{translate[lang].headline}</h4>

      {searching ? (
        <Search isSerach={() => setSearching(false)} />
      ) : (
        <button
          className='btn btn-floating header__search'
          onClick={() => setSearching(true)}>
          <SearchIcons />
        </button>
      )}
    </div>
  )
}

export default Header
