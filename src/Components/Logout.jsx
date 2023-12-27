/* eslint-disable react-hooks/exhaustive-deps */
import  { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom'
import { logout as userLogout} from '../features/User';
import { logout } from "../appwrite/auth"

function Logout() {
	const dispatch = useDispatch();
	useEffect(()=>{
		localStorage.clear();
		dispatch(userLogout());
		logout();
	},[]);
	return (
		<Navigate  to={"/login"}/>
	)
}

export default Logout
