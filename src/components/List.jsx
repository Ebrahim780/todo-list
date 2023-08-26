import { ToDoContext } from 'contexts/ToDoProvider'
import empty from 'assets/image/empty.png'
import { useContext } from 'react'
import Item from './Item'

const List = () => {
	const { todos, farsi } = useContext(ToDoContext)

	return todos.length ? (
		<div className='row list'>
			<div className='col s12 m6 l4'>
				<div className='card-panel green'>
					<h5 className='list__header'>
						{farsi ? 'مهم نیست انجام بشه' : 'No Matter to done'}
					</h5>
					<Item priority='low' />
				</div>
			</div>

			<div className='col s12 m6 l4'>
				<div className='card-panel orange'>
					<h5 className='list__header'>
						{farsi ? 'بهتره انجام بشه' : 'Better to done'}
					</h5>
					<Item priority='medium' />
				</div>
			</div>

			<div className='col s12 m6 l4'>
				<div className='card-panel red'>
					<h5 className='list__header'>
						{farsi ? 'باید انجام بشه' : 'Have to done'}
					</h5>
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
			<p className='list__content'>
				{farsi
					? `شما کاری برای انجام ندارید :)`
					: `You don't have any work to do :)`}
			</p>
		</div>
	)
}

export default List
