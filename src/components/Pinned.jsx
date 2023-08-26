import { ToDoContext } from 'contexts/ToDoProvider'
import unpin from 'assets/icon/unpin.png'
import { useContext } from 'react'
import ToolTip from './ToolTip'

const Pinned = () => {
	const { pinned, farsi, dispatch } = useContext(ToDoContext)

	return (
		pinned.content && (
			<div className='pinned__wrapper'>
				<div className='pinned card-panel blue'>
					<div className='pinned__container'>
						<span className={`pinned__content ${pinned.done && 'done'}`}>
							{pinned.content}
						</span>

						<ToolTip content={farsi ? 'برداشتن' : 'Unpin'}>
							<img
								src={unpin}
								className='pinned__button'
								alt='unpin'
								onClick={() => dispatch({ type: 'UNPIN_TODO', id: pinned.id })}
							/>
						</ToolTip>
					</div>
				</div>
			</div>
		)
	)
}

export default Pinned
