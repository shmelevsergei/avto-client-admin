import { FC } from 'react'

const nameClass: string = 'classBtn'
const Button: FC = () => {
	return (
		<button className={nameClass} type={'button'}>
			Click me
		</button>
	)
}

export default Button
