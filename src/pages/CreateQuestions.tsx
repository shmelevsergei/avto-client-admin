import { FC } from 'react'
import { Form } from 'react-router-dom'

import { instance } from '../api/api.axios.ts'
import { toast } from 'react-toastify'

export const createQuestionAction = async ({ request }: any) => {
	const formData = await request.formData()
	const newQuestion = {
		variant_1: formData.get('answer1'),
		variant_2: formData.get('answer2'),
		variant_3: formData.get('answer3'),
		variant_4: formData.get('answer4'),
		question: formData.get('title'),
		variant: formData.get('variant')
	}

	await instance.post('/questions', newQuestion)
	toast.success('Вопрос добавлен!')
	return null
}

const CreateQuestions: FC = () => {
	return (
		<div className={`mx-auto max-w-[900px]`}>
			<Form method={`post`} action={`/questions/createQuestions`}>
				<div className={`flex flex-col gap-2`}>
					<p className={`text-2xl`}>Введите вопрос:</p>
					<textarea
						required
						placeholder={`Введите текст вопроса...`}
						className={`classInput h-[82px] `}
						name={`title`}
					/>
				</div>

				<div className={` mt-6`}>
					<p className={`text-2xl`}>Напишите варианты ответа:</p>
					<div>
						<div
							className={`mt-2 flex flex-wrap justify-center gap-5 md:justify-between`}
						>
							<label
								className={`flex items-center justify-center gap-2.5`}
							>
								<input
									type="radio"
									className={`form-radio h-6 w-6 cursor-pointer`}
									name={`variant`}
									value={`variant_1`}
									defaultChecked
								/>
								<input
									type="text"
									className={`classInput h-10 w-full placeholder:text-slate-400`}
									placeholder={`Ответ 1`}
									name={`answer1`}
									required
								/>
							</label>
						</div>

						<div
							className={`mt-2 flex flex-wrap justify-center gap-5 md:justify-between`}
						>
							<label
								className={`flex items-center justify-center gap-2.5`}
							>
								<input
									type="radio"
									className={`form-radio h-6 w-6 cursor-pointer`}
									name={`variant`}
									value={`variant_2`}
								/>
								<input
									type="text"
									className={`classInput h-10 w-full placeholder:text-slate-400`}
									placeholder={`Ответ 2`}
									name={`answer2`}
									required
								/>
							</label>
						</div>

						<div
							className={`mt-2 flex flex-wrap justify-center gap-5 md:justify-between`}
						>
							<label
								className={`flex items-center justify-center gap-2.5`}
							>
								<input
									type="radio"
									className={`form-radio h-6 w-6 cursor-pointer`}
									name={`variant`}
									value={`variant_3`}
								/>
								<input
									type="text"
									className={`classInput h-10 w-full placeholder:text-slate-400`}
									placeholder={`Ответ 3`}
									name={`answer3`}
									required
								/>
							</label>
						</div>

						<div
							className={`mt-2 flex flex-wrap justify-center gap-5 md:justify-between`}
						>
							<label
								className={`flex items-center justify-center gap-2.5`}
							>
								<input
									type="radio"
									className={`form-radio h-6 w-6 cursor-pointer`}
									name={`variant`}
									value={`variant_4`}
								/>
								<input
									type="text"
									className={`classInput h-10 w-full placeholder:text-slate-400`}
									placeholder={`Ответ 4`}
									name={`answer4`}
									required
								/>
							</label>
						</div>
					</div>
				</div>

				<div className={`mt-10 flex justify-center`}>
					<button
						type="submit"
						className="classBtn-success bg-success"
					>
						Создать
					</button>
				</div>
			</Form>
		</div>
	)
}

export default CreateQuestions
