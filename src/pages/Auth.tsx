import React, { FC, useState } from 'react'
import { AuthService } from '../services/auth.service.ts'
import { toast } from 'react-toastify'
import { setTokenToLocalstorage } from '../helpers/localstorage.helper.ts'
import { useAppDispatch } from '../store/hooks.ts'
import { useNavigate } from 'react-router-dom'
import { login } from '../store/user/userSlice.ts'

const Auth: FC = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [isLogin, setIsLogin] = useState(false)
	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	const loginHandler = async (e: React.FormEvent<HTMLFormElement>) => {
		try {
			e.preventDefault()
			const data = await AuthService.login({ email, password })
			if (data) {
				setTokenToLocalstorage('token', data.token)
				dispatch(login(data))
				navigate('/users')
			}
			toast.success('Вы авторизованы')
			// 		setIsLogin(!isLogin)
			// 	}
		} catch (err) {
			const error = err.response?.data.message
			toast.error(error.toString())
		}
	}

	const registrationHandler = async (e: React.FormEvent<HTMLFormElement>) => {
		try {
			e.preventDefault()
			const data = await AuthService.registration({ email, password })
			if (data) {
				toast.success('Аккаунт создан')
				setIsLogin(!isLogin)
			}
		} catch (err) {
			const error = err.response?.data.message
			toast.error(error.toString())
		}
	}

	return (
		<div className={`flex h-full flex-col items-center justify-center`}>
			<h1 className={`mb-10 text-center text-3xl`}>
				{isLogin ? ' Авторизация' : ' Регистрация'}
			</h1>

			<form
				onSubmit={isLogin ? loginHandler : registrationHandler}
				className={`mx-auto flex w-[270px] flex-col gap-5`}
			>
				<input
					type="text"
					className={`inputClass`}
					placeholder={`Email`}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					type="password"
					className={`inputClass`}
					placeholder={`Password`}
					onChange={(e) => setPassword(e.target.value)}
				/>

				<button className={`classBtn mx-auto `}>
					{isLogin ? 'Войти ' : 'Зарегистрироваться'}
				</button>
			</form>

			<div className={`mt-5 flex justify-center`}>
				<button
					type={`button`}
					onClick={() => setIsLogin(!isLogin)}
					className={`text-slate-300 hover:text-white`}
				>
					{isLogin
						? 'Создать новый аккаунт?'
						: 'У вас уже есть аккаунт?'}
				</button>
			</div>
		</div>
	)
}

export default Auth
