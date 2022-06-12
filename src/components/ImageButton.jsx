import React from 'react';

const ImageButton = props => {
  return <img
    className='list__button'
    onClick={props.clicked}
    src={props.url}
    alt={props.alt}
  />
}

export default ImageButton;