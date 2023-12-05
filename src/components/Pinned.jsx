import { useStateContext } from 'contexts/ToDoProvider'
import UnpinIcon from './Icons/UnpinIcon'
import translate from 'translate/list'
import ToolTip from './ToolTip'

const Pinned = () => {
  const { todos, lang, dispatch } = useStateContext()

  const pinned = todos.find(todo => todo.pinned == true)

  return (
    pinned?.content && (
      <div className='pinned__wrapper'>
        <div className='pinned card-panel blue'>
          <div className='pinned__container'>
            <span className={`pinned__content ${pinned.done && 'done'}`}>
              {pinned.content}
            </span>

            <ToolTip content={translate[lang].item.unpin}>
              <UnpinIcon
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
