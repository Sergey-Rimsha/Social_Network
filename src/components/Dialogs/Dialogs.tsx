import React from "react";
import UserImg from "../../img/ava_default.jpg";
import {ChatUsers} from "./ChatUsers/ChatUsers";
import {NewMessages} from "./NewMessages/NewMessages";

type PropsType = {
	dialogsPage: DialogsType
}

type DialogsType = {
	chatUsers: Array<InUser>
	messages: Array<InMessage>
}

type InUser = {
	id: number
	name: string
}

type InMessage = {
	id: number
	name: string
	message: string
}


export function Dialogs (props: PropsType) {

	console.log(props)


	return (
		<div className="dialogs-wrap">
			<div className="user-chat-wrap">
				{
					props.dialogsPage.chatUsers.map((user:any) => {
						return (
							<ChatUsers userId={user.id} userName={user.name} />
						)
					})
				}
			</div>
			<div className="dialogs">

				{
					props.dialogsPage.messages.map((mess) => {
						return (
							<div className="message" >
								<div className="imgWrap">
									<img className="messageImg" src={UserImg} alt="user_img"/>
								</div>
								<div className="messageWrap">
									<div className="userName">
										{mess.name}
									</div>
									<div className="userTxt">
										{mess.message}
									</div>
									<div className="messageTime">
										{`props.time`}
									</div>
								</div>
							</div>
						)
					})


				}
				<NewMessages />
			</div>
		</div>
	)
}


