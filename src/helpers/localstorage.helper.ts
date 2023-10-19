export function getTokenFromLocalStorage() {
	const data = localStorage.getItem('token')
	const token = data ? JSON.parse(data) : ''

	return token
}

export function setTokenToLocalstorage(key: string, token: string) {
	localStorage.setItem(key, JSON.stringify(token))
}

export function removeTokenFromLocalstorage(key: string) {
	localStorage.removeItem(key)
}
