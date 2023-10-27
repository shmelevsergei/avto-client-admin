export interface IUser {
	id: number
	email: string
	token: string
}

export interface IUserData {
	email: string
	password: string
}

export interface IResponseUser {
	createdAt: string
	email: string
	id: number
	password: string
	updatedAt: string
}

export interface IResponseUserData {
	token: string
	user: IResponseUser
}

export interface IQuestion {
	id: number
	question: string
	variant: string
	variant_1: string
	variant_2: string
	variant_3: string
	variant_4: string
}

export interface IResponseQuestions {
	questions: IQuestion[]
}

export interface IPerson {
	id: number
	station: string
	name: string
	surname: string
	phone: string
	email: string
	city: string
	ratings: IRating[]
}

export interface IResponsePersons {
	persons: IPerson[]
}

export interface IRating {
	id: number
	value: number
	updatedAt: string
}
