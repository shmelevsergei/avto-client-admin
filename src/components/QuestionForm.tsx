import { FC } from 'react'
import { Form } from 'react-router-dom'

interface IQuestionForm {
	id: number
	setVisibleModal: (visible: boolean) => void
}

const QuestionForm: FC<IQuestionForm> = ({ setVisibleModal, id }) => {
	return (
		<div
			className={`absolute left-2/4 top-2/4 max-w-[900px] -translate-x-2/4 -translate-y-2/4 rounded bg-[#000] bg-opacity-70 p-5`}
		>
			<Form method={`patch`} action={`/questions/editQuestions`}>
				<div className={`flex flex-col gap-2`}>
					<p className={`text-xl`}>Введите вопрос:</p>
					<textarea
						required
						placeholder={`Введите текст вопроса...`}
						className={`classInput h-[82px] `}
						name={`title`}
					/>

					<input type="hidden" name="id" value={id} />
				</div>

				<div className={` mt-6`}>
					<p className={`text-xl`}>Напишите варианты ответа:</p>
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

				<div className={`mt-10 flex justify-center gap-5`}>
					<button
						type="submit"
						className="classBtn-success bg-success"
					>
						Обновить
					</button>

					<button
						onClick={() => setVisibleModal(false)}
						type="button"
						className="classBtn-danger bg-danger"
					>
						Закрыть
					</button>
				</div>
			</Form>
		</div>
	)
}

export default QuestionForm
