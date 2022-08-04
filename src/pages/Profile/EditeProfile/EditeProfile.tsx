import React from "react";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../store/store";
import {ContactsType} from "../../../store/reducers/profileReducer";

import s from './EditeProfile.module.scss';
import {useFormik} from "formik";

export type FormikErrorType = {

}


export const EditeProfile = () => {

	const contacts = useSelector<AppRootStateType, ContactsType>(state => state.profilePage.user.contacts);

	const formik = useFormik({
		initialValues: {
			github: '',
			vk: '',
			facebook: '',
			instagram: '',
			twitter: '',
			website: '',
			youtube: '',
			mainLink: '',
			...contacts
		},
		validate: (values) => {
			const errors: FormikErrorType = {};
			// if (!values.email) {
			// 	errors.email = 'Required';
			// } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
			// 	errors.email = 'Invalid email address';
			// }

			// if (!values.password) {
			// 	errors.password = 'Пароль обязателен';
			// } else if (values.password.length < 3) {
			// 	errors.password = 'Пароль должен быть больше 3 символов';
			// }

			return errors;
		},
		onSubmit: values => {
			// props.onHandlerSubmit(values)
			console.log(values)
			formik.resetForm();
		},

	});

	return (
		<div className={s.editeProfile}>
			<div className={s.editeProfile__title}>
				Edite Mode
			</div>
			<div className={s.editeProfile__block}>
				<div className={s.editeProfile__contacts}>
					<div className={s.editeProfile__subTitle}>
						Contacts:
					</div>
					<form onSubmit={formik.handleSubmit}>
						{
							Object.keys(contacts).map((key, i) => {
								return (
									<div key={i}>
										<span className={s.editeProfile__contact}>
											{key}:
										</span>
										<input
											placeholder={key}
											{...formik.getFieldProps(`${key}`)}
										/>
									</div>
								)
							})
						}
						<button type='submit'>save</button>
					</form>
				</div>
			</div>
		</div>
	)
}

// userId: required(integer)
// lookingForAJob: required(boolean)
// lookingForAJobDescription: required(string)
// fullName: required(string)
// contacts: required(object)
// github: required(string)
// vk: required(string)
// facebook: required(string)
// instagram: required(string)
// twitter: required(string)
// website: required(string)
// youtube: required(string)
// mainLink: required(string)