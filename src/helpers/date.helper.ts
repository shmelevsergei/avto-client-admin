// export const formatDate = (dateString: string): string => {
// 	const date = new Date(dateString)
//
// 	const option = {
// 		year: 'numeric',
// 		month: 'long',
// 		day: 'numeric'
// 	}
// 	return date.toLocaleDateString('ru-RU', option)
// }

export const formatDateNumber = (arr: [] | any) => {
	const lastRatingDateInMilliseconds = arr.reduce(
		(date: any, rating: any) => {
			return new Date(rating.updatedAt).getTime() > date
				? new Date(rating.updatedAt).getTime()
				: date
		},
		new Date(arr[0].updatedAt).getTime()
	)

	// Преобразуйте число обратно в формат даты
	return new Date(lastRatingDateInMilliseconds)
}
