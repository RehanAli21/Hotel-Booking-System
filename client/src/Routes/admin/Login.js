import React, { useContext, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import UserContext from '../../UserContext'

const Login = () => {
	const navigate = useNavigate()
	const [err, setErr] = useState('')
	const { setUser } = useContext(UserContext)

	const usernameRef = useRef('')
	const passRef = useRef('')

	const SignIn = e => {
		e.preventDefault()

		axios
			.get(`http://localhost:5000/api/login/${usernameRef.current.value}/${passRef.current.value}`)
			.then(res => {
				if (res.data.msg) {
					return setErr(res.data.msg)
				}

				if (res.data.successMsg && res.data.successMsg === 'user found') {
					setUser(usernameRef.current.value, res.data.usertype)

					navigate('/admin/dashboard/' + usernameRef.current.value)
				}
			})
			.catch(err => setErr('Something went wrong!'))
	}

	return (
		<div
			style={{ width: '100vw', height: '100vh', margin: '0px', padding: '0px', overflow: 'hidden' }}
			className='bgfirst'>
			<div className='container text-center mx-auto' style={{ width: '400px', marginTop: '15vh' }}>
				<h1 className='lastText fw-bold fs-1 mb-5'>The Marker Hotel</h1>
				<form onSubmit={SignIn}>
					<div className='input-group rounded-0 input-group-lg w-100'>
						<span className='input-group-text rounded-0'>
							<i className='fa fa-user'></i>
						</span>
						<input
							type='text'
							className='form-control rounded-0'
							name='username'
							placeholder='Username'
							ref={usernameRef}
						/>
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
							ref={passRef}
						/>
					</div>
					<button className='btn btn-warning w-100 fw-bold rounded-0' name='login'>
						LOGIN
					</button>
					<h4 className='mt-4 text-danger'>{err}</h4>
				</form>
			</div>
		</div>
	)
}

export default Login
