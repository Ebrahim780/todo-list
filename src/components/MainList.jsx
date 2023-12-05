import { useStateContext } from 'contexts/ToDoProvider'
import EmptyIcon from './Icons/EmptyIcon'
import PriorityList from './PriorityList'
import translate from 'translate/list'

const MainList = () => {
  const { todos, lang } = useStateContext()

  return todos.length ? (
    <div className='row list'>
      <PriorityList priority='low' />
      <PriorityList priority='medium' />
      <PriorityList priority='high' />
    </div>
  ) : (
    <div className='row list__empty'>
      <EmptyIcon />
      <p>{translate[lang].empty}</p>
    </div>
  )
}

export default MainList
