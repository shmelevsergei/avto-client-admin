import { FC } from 'react'
import { instance } from '../api/api.axios.ts'
import { IPerson, IResponsePersons } from '../types/types.ts'
import { useLoaderData } from 'react-router-dom'
import { formatDateNumber } from '../helpers/date.helper.ts'

export const usersLoader = async () => {
	const persons = await instance.get<IPerson[]>('/persons')

	const data = { persons: persons.data }

	return data
}

const Users: FC = () => {
	const { persons } = useLoaderData() as IResponsePersons

	return (
		<div className="flex flex-col">
			<div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
				<div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
					<div className="overflow-hidden">
						{persons.length ? (
							<table className="min-w-full text-left text-sm font-light">
								<thead className="border-b font-medium dark:border-neutral-500">
									<tr>
										<th scope="col" className="px-6 py-4">
											#
										</th>
										<th scope="col" className="px-6 py-4">
											Имя
										</th>
										<th scope="col" className="px-6 py-4">
											Фамилия
										</th>
										<th scope="col" className="px-6 py-4">
											Телефон
										</th>
										<th scope="col" className="px-6 py-4">
											Почта
										</th>
										<th scope="col" className="px-6 py-4">
											Город
										</th>
										<th scope="col" className="px-6 py-4">
											Станция
										</th>

										<th scope="col" className="px-6 py-4">
											Рейтинг
										</th>
										<th scope="col" className="px-6 py-4">
											Последняя игра
										</th>
									</tr>
								</thead>
								<tbody>
									{persons.map((person, idx) => (
										<tr
											key={person.id}
											className="border-b dark:border-neutral-500"
										>
											<td className="whitespace-nowrap px-6 py-4 font-medium">
												{idx + 1}
											</td>
											<td className="whitespace-nowrap px-6 py-4">
												{person.name}
											</td>
											<td className="whitespace-nowrap px-6 py-4">
												{person.surname}
											</td>
											<td className="whitespace-nowrap px-6 py-4">
												{person.phone}
											</td>
											<td className="whitespace-nowrap px-6 py-4">
												{person.email}
											</td>
											<td className="whitespace-nowrap px-6 py-4">
												{person.city}
											</td>
											<td className="whitespace-nowrap px-6 py-4">
												{person.station}
											</td>
											<td className="whitespace-nowrap px-6 py-4">
												{person.ratings.reduce(
													(max, rating) => {
														return rating.value >
															max
															? rating.value
															: max
													},
													0
												)}
											</td>

											<td className="whitespace-nowrap px-6 py-4">
												{person.ratings.length > 0
													? `${formatDateNumber(
															person.ratings.map(
																(rating) => {
																	return rating.updatedAt
																}
															)
													  )}`
													: 'Не играл'}
											</td>
										</tr>
									))}
								</tbody>
							</table>
						) : (
							<h2>Не зарегистрировано ни одного пользователя</h2>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Users
