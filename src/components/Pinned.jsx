import { useStateContext } from 'contexts/ToDoProvider'
import unpin from 'assets/icon/unpin.png'
import translate from 'translate/list'
import ToolTip from './ToolTip'

const Pinned = () => {
	const { pinned, lang, dispatch } = useStateContext()

	return (
		pinned.content && (
			<div className='pinned__wrapper'>
				<div className='pinned card-panel blue'>
					<div className='pinned__container'>
						<span className={`pinned__content ${pinned.done && 'done'}`}>
							{pinned.content}
						</span>

						<ToolTip content={translate[lang].item.unpin}>
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
