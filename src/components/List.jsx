import { useStateContext } from 'contexts/ToDoProvider'
import empty from 'assets/image/empty.png'
import translate from 'translate/list'
import Item from './Item'

const List = () => {
	const { todos, lang } = useStateContext()

	return todos.length ? (
		<div className='row list'>
			<div className='col s12 m6 l4'>
				<div className='card-panel green'>
					<h5 className='list__header'>{translate[lang].lowTitle}</h5>
					<Item priority='low' />
				</div>
			</div>

			<div className='col s12 m6 l4'>
				<div className='card-panel orange'>
					<h5 className='list__header'>{translate[lang].mediumTitle}</h5>
					<Item priority='medium' />
				</div>
			</div>

			<div className='col s12 m6 l4'>
				<div className='card-panel red'>
					<h5 className='list__header'>{translate[lang].highTitle}</h5>
					<Item priority='high' />
				</div>
			</div>
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

export default List
