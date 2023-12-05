const CheckedIcon = ({ onClick, checked }) => {
  return (
    <svg
      viewBox='0 0 24 24'
      width='20'
      height='20'
      onClick={onClick}
      className='list__button'>
      {checked ? (
        <path fill="#fff" d='M5 3C3.897 3 3 3.897 3 5L3 19C3 20.103 3.897 21 5 21L19 21C20.103 21 21 20.103 21 19L21 9.2421875L19 11.242188L19.001953 19L5 19L5 5L16.757812 5L18.757812 3L5 3 z M 21.292969 3.2929688L11 13.585938L7.7070312 10.292969L6.2929688 11.707031L11 16.414062L22.707031 4.7070312L21.292969 3.2929688 z' />
      ) : (
        <path fill="#fff" d='M5 3C3.9069372 3 3 3.9069372 3 5L3 19C3 20.093063 3.9069372 21 5 21L19 21C20.093063 21 21 20.093063 21 19L21 5C21 3.9069372 20.093063 3 19 3L5 3 z M 5 5L19 5L19 19L5 19L5 5 z' />
      )}
    </svg>
  )
}

export default CheckedIcon
