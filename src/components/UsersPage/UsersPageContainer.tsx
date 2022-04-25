import {useDispatch, useSelector} from "react-redux";

import {AppRootStateType, AppThunkType} from "../../redux/store";
import {
	ActionUsersType,
	followUsersTC,
	StateUsersType,
	thunkOnPageChanged,
	unFollowUsersTC
} from "../../redux/usersReducer";
import React, {useEffect} from "react";
import {UsersPage} from "./UsersPage";
import {Preloader} from "../Preloader/Preloader";

// type DispatchType = Dispatch<ActionUsersType> | any
type DispatchType = (arg: AppThunkType) => ActionUsersType

export const UsersPageContainer = () => {

	const {
		users,
		currentPage,
		userPageSize,
		isFetching,
		totalCount,
	} = useSelector<AppRootStateType, StateUsersType>((state) => state.usersPage);
	const toggleUserId = useSelector<AppRootStateType, number>((state) => state.usersPage.toggleIsButtons.userId);
	const toggleButton = useSelector<AppRootStateType, boolean>((state) => state.usersPage.toggleIsButtons.disableButton);

	const dispatch = useDispatch<DispatchType>();

	useEffect(() => {
		dispatch(thunkOnPageChanged(currentPage, userPageSize));
	}, []);

	const onPageChanged = (pageNumber: number, countUsers = 10) => {
				dispatch(thunkOnPageChanged(pageNumber, countUsers));
	}

	const onFollowUsers = (userId: number) => {
		dispatch(followUsersTC(userId, currentPage, userPageSize))
	}

	const unFollowUsers = (userId: number) => {
		dispatch(unFollowUsersTC(userId, currentPage, userPageSize))
	}

	// const onClickHandler = (userId: number) => {
		// dispatch(followedUser(userId));
		// onFollowUsers(userId);
	// }

	return (
		<>
			{isFetching ? <Preloader/> : null}
			<UsersPage
				users={users}
				totalCount={totalCount}
				userPageSize={userPageSize}
				currentPage={currentPage}
				toggleUserId={toggleUserId}
				toggleButton={toggleButton}
				onFollowUsers={onFollowUsers}
				onPageChanged={onPageChanged}
				unFollowUsers={unFollowUsers}
			/>
		</>
	)

}


