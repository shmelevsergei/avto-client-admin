import { FC } from 'react'
import { useAuth } from '../hooks/useAuth.ts'
import Button from './Button.tsx'
import { useDispatch } from 'react-redux'
import { logout } from '../store/user/userSlice.ts'
import { removeTokenFromLocalstorage } from '../helpers/localstorage.helper.ts'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Header: FC = () => {
	const isAuth = useAuth()
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const logoutHandler = () => {
		dispatch(logout())
		removeTokenFromLocalstorage('token')
		toast.success('Вы вышли из системы')
		navigate('/')
	}
	return (
		<header
			className={
				'relative flex h-[80px] w-full items-center justify-center text-center text-3xl'
			}
		>
			<span className={`block`}>Панель администратора</span>

			<div className={`absolute right-24 top-2/4 -translate-y-2/4`}>
				{isAuth ? (
					<Button
						onClick={logoutHandler}
						textButton={`Выход`}
						className={`classBtn-danger bg-danger`}
					/>
				) : (
					''
				)}
			</div>
		</header>
	)
}

export default Header
