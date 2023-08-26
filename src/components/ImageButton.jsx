const ImageButton = ({ clicked, url, alt }) => {
	return (
		<img
			className='list__button'
			onClick={clicked}
			src={url}
			alt={alt}
		/>
	)
}

export default ImageButton
