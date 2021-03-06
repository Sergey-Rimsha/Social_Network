import axios from "axios";

// const axios = require('axios');


export type ResponseType<T> = {
	data: T
	resultCode: number
	messages: string[]
	fieldsErrors: string[]
}

type AuthUserType = {
	id: number
	email: string
	login: string
}

const instance = axios.create ({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers:     {
		"API-KEY": "31e5f258-a64c-4753-8a60-acee980643ae"
	}
});

export type AuthDataType = {
	email: string,
	password: string,
	rememberMe: boolean
}

export const authApi = {

	authLoginMe() {
		return instance.get<ResponseType<AuthUserType>>(`auth/me`)
			.then((res) => {
				// console.log(res)
				return res.data
			})
	},


	authLogin(data: AuthDataType) {
		const newData = {
			email: data.email,
			password: data.password,
			rememberMe: data.rememberMe,
			captcha: null,
		}
		return instance.post<ResponseType<{userId: number}>>(`auth/login`,newData)
	},

	authLogout() {
		return instance.delete(`auth/login`)
	}

}


export const usersApi = {
	usersPage(currentPage: number, userPageSize: number) {
	    return instance.get(`users?page=${currentPage}&count=${userPageSize}`)
			.then((response) => {
				// console.log(response.data)
				return response;

			})
	},
	followUser(userId: number) {
		return instance.post<ResponseType<{}>>(`follow/${userId}`)
			.then((response) => {
				return response.data
			})
	},
	unFollowUser(userId: number) {
		return instance.delete<ResponseType<{}>>(`follow/${userId}`)
			.then((response) => {
				return response.data
			})
	},

	getProfile(userId: string) {
		return instance.get(`profile/${userId}`)
			.then((response) => {
				return response.data;
			})
	},

	getUserStatus(userId: number) {
		return instance.get(`/profile/status/${userId}`)
			.then((res) => {
				return res.data
			})
	},

	putUserStatus(status: string) {
		return instance.put<ResponseType<{}>>(`/profile/status`, {status})
			.then(res => {
				return res.data
			})
	}
///*
}