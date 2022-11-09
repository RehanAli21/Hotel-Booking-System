import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import UserContext from '../../UserContext'

const Login = () => {
	const navigate = useNavigate()
	const { userName, userType } = useContext(UserContext)

	useEffect(() => {
		if (userName === '') {
			navigate('/')
		}
	}, [])

	return (
		<div
			style={{ width: '100vw', height: '100vh', margin: '0px', padding: '0px', overflow: 'hidden' }}
			className='bgfirst'>
			<div className='container text-center mx-auto' style={{ width: '400px', marginTop: '15vh' }}>
				<h1 className='lastText fw-bold fs-1 mb-5'>The Marker Hotel</h1>
				<form method='post'>
					<div className='input-group rounded-0 input-group-lg w-100'>
						<span className='input-group-text rounded-0'>
							<i className='fa fa-user'></i>
						</span>
						<input type='text' className='form-control rounded-0' name='username' placeholder='Username' />
					</div>
					<div className='input-group input-group-lg my-4 w-100 rounded-0'>
						<span className='input-group-text rounded-0'>
							<i className='fa-solid fa-lock'></i>
						</span>
						<input
							type='password'
							className='form-control rounded-0'
							name='password'
							placeholder='Password'
						/>
					</div>
					<button className='btn btn-warning w-100 fw-bold rounded-0' name='login'>
						LOGIN
					</button>
				</form>
			</div>
		</div>
	)
}

export default Login
