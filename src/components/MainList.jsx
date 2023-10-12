import { useStateContext } from 'contexts/ToDoProvider'
import empty from 'assets/image/empty.png'
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
		<div className='row'>
			<img
				src={empty}
				alt='nothing to do'
				className='list__image--empty'
			/>
			<p className='list__content'>{translate[lang].empty}</p>
		</div>
	)
}

export default MainList
