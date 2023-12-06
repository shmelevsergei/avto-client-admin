import axios from 'axios'
import { getTokenFromLocalStorage } from '../helpers/localstorage.helper.ts'

export const instance = axios.create({
	baseURL: 'http://178.253.42.38:3002/api',
	// baseURL: 'http://localhost:3001/api',

	headers: {
		Authorization: `Bearer ` + getTokenFromLocalStorage() || ''
	}
})
