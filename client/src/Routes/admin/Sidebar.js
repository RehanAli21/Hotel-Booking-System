import React from 'react'
import { Link } from 'react-router-dom'
import '../s.css'

const SideBar = ({ userType, navigate, resetUser, page, username }) => {
	const Logout = () => {
		resetUser()
		navigate('/admin')
	}

	return (
		<div className='col-2 mysidebar bg-dark text-white pt-3' style={{ height: '100vh' }}>
			{userType === 'admin' ? (
				<Link
					style={{ textDecoration: 'none' }}
					to='/admin/users'
					className={
						page === 'u'
							? 'sidebarA w-100 p-3 text-start text-white fs-bold d-block bgthird'
							: 'sidebarA w-100 p-3 text-start text-white fs-bold d-block'
					}>
					<p className='d-inline'>Users</p>
				</Link>
			) : null}
			<Link
				style={{ textDecoration: 'none' }}
				to={'/admin/dashboard/' + username}
				className={
					page === 'd'
						? 'sidebarA w-100 p-3 text-start text-white fs-bold d-block bgthird'
						: 'sidebarA w-100 p-3 text-start text-white fs-bold d-block'
				}>
				<p className='d-inline'>Reservations</p>
			</Link>
			<Link
				style={{ textDecoration: 'none' }}
				to='/admin/checkin'
				className={
					page === 'ci'
						? 'sidebarA w-100 p-3 text-start text-white fs-bold d-block bgthird'
						: 'sidebarA w-100 p-3 text-start text-white fs-bold d-block'
				}>
				<p className='d-inline'>Checked In</p>
			</Link>
			<Link
				style={{ textDecoration: 'none' }}
				to='/admin/checkout'
				className={
					page === 'co'
						? 'sidebarA w-100 p-3 text-start text-white fs-bold d-block bgthird'
						: 'sidebarA w-100 p-3 text-start text-white fs-bold d-block'
				}>
				<p className='d-inline'>Checked Out</p>
			</Link>
			<a
				to='/admin'
				onClick={Logout}
				style={{ textDecoration: 'none', cursor: 'pointer' }}
				className='sidebarA w-100 p-3 text-start text-white fs-bold d-block'>
				<p className='d-inline' name='logout'>
					LOGOUT
				</p>
			</a>
		</div>
	)
}

export default SideBar
