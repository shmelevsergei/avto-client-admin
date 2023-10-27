import { FC, JSX } from 'react'

type button = {
	textButton: string
	className: string
	onClick?: () => void
}
const Button: FC<button> = ({
	textButton,
	className,
	onClick
}): JSX.Element => {
	return (
		<button onClick={onClick} className={`${className}`} type={'button'}>
			{textButton}
		</button>
	)
}

export default Button
