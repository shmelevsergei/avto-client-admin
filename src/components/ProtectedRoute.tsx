import { FC } from 'react'
import { useAuth } from '../hooks/useAuth.ts'
import { NavLink } from 'react-router-dom'

interface Props {
	children: JSX.Element
}

const ProtectedRoute: FC<Props> = ({ children }) => {
	const isAuth = useAuth()
	return (
		<>
			{isAuth ? (
				children
			) : (
				<div
					className={`flex h-full flex-col items-center justify-center gap-10`}
				>
					<h1 className={`text-2xl`}>
						Вам необходимо войти в приложение
					</h1>

					<NavLink to={`/auth`} className={`classBtn`}>
						{' '}
						{`Войти / Зарегистрироваться`}{' '}
					</NavLink>
				</div>
			)}
		</>
	)
}

export default ProtectedRoute
