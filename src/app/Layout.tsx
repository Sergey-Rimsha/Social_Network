import {Outlet} from 'react-router-dom';
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../store/store";
import {initializeApp} from "../store/reducers/utilsReducer";
import {HeaderContainer} from "../components/Header/HeaderContainer";
import {Preloader} from "../components/Preloader/Preloader";
import {Sidebar} from "../components/Sidebar/Sidebar";


export const Layout = () => {

	const dispatch = useDispatch();

	const isFetching = useSelector<AppRootStateType, boolean>(state => state.utils.isFetching);
	const initialized = useSelector<AppRootStateType, boolean>(state => state.utils.initialized);

	useEffect(() => {
		if (!initialized) dispatch(initializeApp())
	},[dispatch, initialized])

	if (!initialized) return <Preloader />

	return (
		<div className={"layout"}>
			<HeaderContainer />
			{isFetching && <Preloader />}
			{/*<div className="page">*/}
				<div className="container">
					<div className="page">
						<Sidebar />
						<main className="main">
							<Outlet />
						</main>
					</div>

				</div>
			{/*</div>*/}
		</div>
	)
};