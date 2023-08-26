import React, { useState } from 'react'
import 'styles/tooltip.css'

const Tooltip = ({ children, delay, direction, content }) => {
	let timeout
	const [active, setActive] = useState(false)

	const showTip = () => {
		timeout = setTimeout(() => {
			setActive(true)
		}, delay || 250)
	}

	const hideTip = () => {
		clearInterval(timeout)
		setActive(false)
	}

	return (
		<div
			className='Tooltip-Wrapper'
			onMouseEnter={showTip}
			onMouseLeave={hideTip}>
			{children}
			{active && (
				<div className={`Tooltip-Tip ${direction || 'top'}`}>{content}</div>
			)}
		</div>
	)
}

export default Tooltip
