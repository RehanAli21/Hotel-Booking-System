import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = ({ userType, navigate, resetUser, page, username }) => {
	const Logout = () => {
		resetUser()
		navigate('/admin')
	}

	console.log('usertype: ' + userType)

	return (
		<div className='col-2 mysidebar bg-dark text-white pt-3'>
			{userType === 'admin' ? (
				<Link
					style={{ textDecoration: 'none' }}
					to='/admin/users'
					className={
						'sidebarA w-100 p-3 text-start text-white fs-bold d-block' + page === 'u' ? ' bgthird' : ''
					}>
					<p className='d-inline'>Users</p>
				</Link>
			) : null}
			<Link
				style={{ textDecoration: 'none' }}
				to={'/admin/dashboard/' + username}
				className={'sidebarA w-100 p-3 text-start text-white fs-bold d-block' + page === 'd' ? ' bgthird' : ''}>
				<p className='d-inline'>Reservations</p>
			</Link>
			<Link
				style={{ textDecoration: 'none' }}
				to='/admin/checkin'
				className={
					'sidebarA w-100 p-3 text-start text-white fs-bold d-block' + +page === 'ci' ? ' bgthird' : ''
				}>
				<p className='d-inline'>Checked In</p>
			</Link>
			<Link
				style={{ textDecoration: 'none' }}
				to='/admin/checkout'
				className={
					'sidebarA w-100 p-3 text-start text-white fs-bold d-block' + +page === 'co' ? ' bgthird' : ''
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
