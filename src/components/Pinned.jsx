import React, { useContext } from 'react';
import { ToDoContext } from '../contexts/ToDoProvider';
import unpin from '../assets/icon/unpin.png';
import ToolTip from './ToolTip';

const Pinned = () => {
  const { pinned, farsi, dispatch } = useContext(ToDoContext)

  if (pinned.content)
    return (
      <div className="pinned__wrapper">
        <div className='pinned card-panel blue'>
          <h5 className="pinned__header">{farsi ? 'سنجاق شده' : 'Pinned'}</h5>
          <div className="pinned__container">
            <span className='pinned__content' >{pinned.content}</span>
            <ToolTip content={farsi ? 'برداشتن' : 'Unpin'}>
            <img src={unpin} className='pinned__button'
              onClick={() => dispatch({ type: 'UNPIN_TODO', id: pinned.id })} />
            </ToolTip>
          </div>
        </div>
      </div>
    )
  else return null
}

export default Pinned;