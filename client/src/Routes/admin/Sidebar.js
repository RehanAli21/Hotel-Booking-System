import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = ({ userType, navigate, resetUser }) => {
	const Logout = () => {
		resetUser()
		navigate('/admin')
	}

	return (
		<div className='col-2 mysidebar bg-dark text-white pt-3'>
			{userType === 'admin' ? (
				<Link to='/admin/users' className='sidebarA w-100 p-3 text-start text-white fs-bold d-block'>
					<p className='d-inline'>Users</p>
				</Link>
			) : null}
			<Link to='/admin/dashboard' className='sidebarA w-100 p-3 text-start text-white fs-bold d-block bgthird'>
				<p className='d-inline'>Reservations</p>
			</Link>
			<Link to='/admin/checkin' className='sidebarA w-100 p-3 text-start text-white fs-bold d-block'>
				<p className='d-inline'>Checked In</p>
			</Link>
			<Link to='/admin/checkout' className='sidebarA w-100 p-3 text-start text-white fs-bold d-block'>
				<p className='d-inline'>Checked Out</p>
			</Link>
			<a to='#' onClick={Logout} className='sidebarA w-100 p-3 text-start text-white fs-bold d-block'>
				<p className='d-inline' name='logout'>
					LOGOUT
				</p>
			</a>
		</div>
	)
}

export default SideBar
