import { FC, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const Questions: FC = () => {
	const navigate = useNavigate()
	const [isCreateActive, setIsCreateActive] = useState(false)
	const [isEditActive, setIsEditActive] = useState(false)

	const handleCreateClick = () => {
		navigate('/questions/createQuestions')
		setIsCreateActive(true)
		setIsEditActive(false)
	}
	const handleEditClick = () => {
		navigate('/questions/editQuestions')
		setIsCreateActive(false)
		setIsEditActive(true)
	}
	return (
		<>
			<div className={`mb-20 mt-14 flex flex-wrap justify-center gap-10`}>
				<button
					className={`classBtn bg-primary-900 ${
						isCreateActive ? 'active' : ''
					} `}
					onClick={handleCreateClick}
				>
					Создать вопросы
				</button>
				<button
					className={`classBtn bg-primary-900 ${
						isEditActive ? 'active' : ''
					}`}
					onClick={handleEditClick}
				>
					Изменить вопросы
				</button>
			</div>
			<Outlet />
		</>
	)
}

export default Questions
