import { FC, useState } from 'react'
import { MdOutlineDeleteOutline, MdOutlineModeEdit } from 'react-icons/md'
import { instance } from '../api/api.axios.ts'
import { IQuestion, IResponseQuestions } from '../types/types.ts'
import { Form, useLoaderData } from 'react-router-dom'
import { toast } from 'react-toastify'
import QuestionForm from '../components/QuestionForm.tsx'

export const questionsLoader = async () => {
	const questions = await instance.get<IQuestion[]>('/questions')

	const data = { questions: questions.data }

	return data
}

export const questionsAction = async ({ request }: any) => {
	switch (request.method) {
		case 'PATCH': {
			const formData = await request.formData()
			const question = {
				id: formData.get('id'),
				variant_1: formData.get('answer1'),
				variant_2: formData.get('answer2'),
				variant_3: formData.get('answer3'),
				variant_4: formData.get('answer4'),
				question: formData.get('title'),
				variant: formData.get('variant')
			}

			await instance.patch(`/questions/${question.id}`, question)
			toast.success('Вопрос обновлён!')
			return null
		}
		case 'DELETE': {
			const formData = await request.formData()
			const questionId = formData.get('id')
			await instance.delete(`/questions/${questionId}`)
			toast.success('Вопрос удалён')
			return null
		}
	}
}

const EditQuestions: FC = () => {
	const { questions } = useLoaderData() as IResponseQuestions
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const [isQuestionId, setIsQuestionId] = useState<number>(0)

	return (
		<>
			<div className="rounded bg-[#fff] bg-opacity-20 p-5 ">
				<div className="flex flex-col">
					<div className="h-[550px] overflow-x-auto overflow-y-auto sm:-mx-6 lg:-mx-8 ">
						<div className="inline-block min-w-full sm:px-6 lg:px-8">
							<div className="max-h-full overflow-y-auto">
								{questions.length ? (
									<table className="min-w-full text-left text-sm text-black">
										<thead className="border-b border-primary-900 bg-primary-400">
											<tr>
												<th
													scope="col"
													className="px-6 py-4"
												>
													#
												</th>
												<th
													scope="col"
													className="px-6 py-4"
												>
													Название вопроса
												</th>
												<th
													scope="col"
													className="px-6 py-4"
												>
													Ответ 1
												</th>
												<th
													scope="col"
													className="px-6 py-4"
												>
													Ответ 2
												</th>
												<th
													scope="col"
													className="px-6 py-4"
												>
													Ответ 3
												</th>
												<th
													scope="col"
													className="px-6 py-4"
												>
													Ответ 4
												</th>
												<th
													scope="col"
													className="px-6 py-4"
												></th>
											</tr>
										</thead>
										<tbody>
											{questions.map((question, idx) => (
												<tr
													key={idx}
													className="border-b bg-white"
												>
													<td className="whitespace-nowrap px-6 py-2 font-medium">
														{idx + 1}
													</td>
													<td className=" px-6 py-4">
														{question.question}
													</td>
													<td
														className={`whitespace-nowrap px-6 py-2 ${
															question.variant ===
															'variant_1'
																? 'bg-success-500'
																: ''
														}`}
													>
														{question.variant_1}
													</td>
													<td
														className={`whitespace-nowrap px-6 py-2 ${
															question.variant ===
															'variant_2'
																? 'bg-success-500'
																: ''
														}`}
													>
														{question.variant_2}
													</td>
													<td
														className={`whitespace-nowrap px-6 py-2 ${
															question.variant ===
															'variant_3'
																? 'bg-success-500'
																: ''
														}`}
													>
														{question.variant_3}
													</td>
													<td
														className={`whitespace-nowrap px-6 py-2 ${
															question.variant ===
															'variant_4'
																? 'bg-success-500'
																: ''
														}`}
													>
														{question.variant_4}
													</td>
													<td className="flex gap-2.5 whitespace-nowrap px-6 py-2">
														<button
															onClick={() => {
																setIsOpen(true)
																setIsQuestionId(
																	question.id
																)
															}}
															type="button"
															className="classBtn-success bg-success px-4"
														>
															<MdOutlineModeEdit
																size={24}
															/>
														</button>
														<Form
															method={'delete'}
															action={
																'/questions/editQuestions'
															}
														>
															<input
																type="hidden"
																name={'id'}
																value={
																	question.id
																}
															/>
															<button
																type="submit"
																className="classBtn-danger bg-danger p-2"
															>
																<MdOutlineDeleteOutline
																	size={24}
																/>
															</button>
														</Form>
													</td>
												</tr>
											))}
										</tbody>
									</table>
								) : (
									<h2>Ещё не создано ни одного вопроса</h2>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
			{isOpen && (
				<QuestionForm id={isQuestionId} setVisibleModal={setIsOpen} />
			)}
		</>
	)
}

export default EditQuestions
