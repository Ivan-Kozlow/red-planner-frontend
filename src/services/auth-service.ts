import { removeTokenFromStorage, saveTokenStorage } from '@/services/auth-token'

import { IAuthForm, IAuthResponse } from '@/types/auth.types'
import { axiosClassic } from '../api/interceptions'

export const authService = {
	async main(type: 'login' | 'register', data: IAuthForm) {
		const response = await axiosClassic.post<IAuthResponse>(`/auth/${type}`, data)
		if (response.data.accessToken) saveTokenStorage(response.data.accessToken)
		return response
	},

	async getNewToken() {
		const response = await axiosClassic.get<IAuthResponse>('/auth/login/access-token')
		if (response.data.accessToken) saveTokenStorage(response.data.accessToken)
		return response
	},

	async logout() {
		const response = await axiosClassic.post('/auth/logout')
		if (response.data) removeTokenFromStorage()
		return response
	},
}
