import { FC, useState } from 'react'
import { FaBars, FaX } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'

type SidebarProps = {
	isAuth: boolean
}
const Sidebar: FC<SidebarProps> = ({ isAuth }) => {
	const [isOpen, setIsOpen] = useState(false)
	let className =
		'group fixed bottom-0 left-0 top-0 flex min-w-[60px] max-w-[320px] flex-col gap-y-20 bg-blue-800 px-4 pt-5 shadow transition-all duration-300'

	isOpen ? (className += ' w-full') : (className += ' isCloseMenu')
	if (!isAuth) className += ` hidden`
	return (
		<aside className={className}>
			<button
				type={'button'}
				className={'self-end'}
				onClick={() => setIsOpen(!isOpen)}
			>
				{!isOpen ? <FaBars size={30} /> : <FaX size={30} />}
			</button>

			<nav className={'group-[.isCloseMenu]:hidden'}>
				<ul className={'flex flex-col gap-y-4 text-xl'}>
					<NavLink
						onClick={() => setIsOpen(!isOpen)}
						to={'/createQuestions'}
						className={({ isActive }) =>
							isActive ? 'text-white' : 'text-white/50'
						}
					>
						{'Создать вопросы'}
					</NavLink>
					<NavLink
						onClick={() => setIsOpen(!isOpen)}
						to={'/editQuestions'}
						className={({ isActive }) =>
							isActive ? 'text-white' : 'text-white/50'
						}
					>
						{'Изменить вопросы'}
					</NavLink>
					<NavLink
						onClick={() => setIsOpen(!isOpen)}
						to={'/users'}
						className={({ isActive }) =>
							isActive ? 'text-white' : 'text-white/50'
						}
					>
						{'Список участников'}
					</NavLink>
					<NavLink
						onClick={() => setIsOpen(!isOpen)}
						to={'/questions'}
						className={({ isActive }) =>
							isActive ? 'text-white' : 'text-white/50'
						}
					>
						{'Список вопросов'}
					</NavLink>
				</ul>
			</nav>
		</aside>
	)
}

export default Sidebar
