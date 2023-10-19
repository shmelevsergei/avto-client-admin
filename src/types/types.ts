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