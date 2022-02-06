import {combineReducers, createStore} from "redux";
import {reducerDialogs} from "./reducerDialogs";
import {reducerProfile} from "./reducerProfile";
import {reducerUsers, StateUsersType} from "./reducerUsers";

export type StateType = {
	dialogsPage: DialogsType
	profilePage: PostType
	usersPage: StateUsersType
}
export type DialogsType = {
	chatUsers: Array<InUser>
	messages: Array<InMessage>
	changeMessChat: string
}
export type InUser = {
	id: number
	name: string
}
export type InMessage = {
	id: number
	name: string
	message: string
}
export type PostType = {
	posts: Array<InPost>
	changeMessage: string
}
export type InPost = {
	id: number
	message: string
	likesCount: number
}


export type StoreDispatchType = typeof store.dispatch

let reducers = combineReducers({
	dialogsPage: reducerDialogs,
	profilePage: reducerProfile,
	usersPage: reducerUsers
})

export let store = createStore(reducers);