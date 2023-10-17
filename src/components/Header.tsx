import { FC } from 'react'

const Header: FC = () => {
	return (
		<header
			className={
				'flex h-[60px] w-full items-center justify-center bg-blue-800 text-center text-3xl'
			}
		>
			Панель администратора
		</header>
	)
}

export default Header
