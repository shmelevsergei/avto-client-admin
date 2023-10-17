import { FC } from 'react'
import { FaBars, FaX } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'

const Sidebar: FC = () => {
	// const [isOpen, setIsOpen] = useState(true)

	const isOpen: boolean = false
	return (
		<aside
			className={
				'fixed bottom-0 left-0 top-0 flex min-w-[60px] max-w-[320px] flex-col gap-y-20 bg-blue-800 px-4 pt-7 shadow transition-all'
			}
		>
			<button type={'button'} className={'self-end'}>
				{isOpen ? <FaBars size={30} /> : <FaX size={30} />}
			</button>

			<nav>
				<ul className={'flex flex-col gap-y-4 text-xl'}>
					<NavLink
						to={'/createQuestions'}
						className={({ isActive }) =>
							isActive ? 'text-white' : 'text-white/50'
						}
					>
						{'Создать вопросы'}
					</NavLink>
					<NavLink
						to={'/editQuestions'}
						className={({ isActive }) =>
							isActive ? 'text-white' : 'text-white/50'
						}
					>
						{'Изменить вопросы'}
					</NavLink>
					<NavLink
						to={'/users'}
						className={({ isActive }) =>
							isActive ? 'text-white' : 'text-white/50'
						}
					>
						{'Список участников'}
					</NavLink>
					<NavLink
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
