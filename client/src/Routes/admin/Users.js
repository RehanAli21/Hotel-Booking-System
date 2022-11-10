import React, { Fragment, useContext, useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import UserContext from '../../UserContext'
import '../s.css'
import axios from 'axios'
import Sidebar from './Sidebar'

const Users = () => {
	const [data, setData] = useState([])

	const [addUserMsg, setAddUserMsg] = useState('')

	const usernameRef = useRef()
	const passRef = useRef()

	const navigate = useNavigate()
	const { userName, userType, resetUser } = useContext(UserContext)

	useEffect(() => {
		if (userName === '' || userType === '' || userType !== 'admin') navigate('/admin/dashboard')

		getUsers()
	}, [])

	const deleteUser = id => {
		axios
			.get(`http://localhost:5000/api/deleteuser/${id}`)
			.then(res => {
				if (res.data.msg === 'success') getUsers()
				else if (res.data.msg === 'error') alert('Something went wrong in deleting user.')
			})
			.catch(err => {
				console.log(err)
				alert('Something went wrong!, try agian')
			})
	}

	const getUsers = () => {
		const newRows = []
		axios
			.get('http://localhost:5000/api/users')
			.then(res => {
				let num = 1
				res.data.forEach(record => {
					newRows.push(
						<tr key={record.id}>
							<td scope='col'>{num}</td>
							<td scope='col'>{record.name}</td>
							<td scope='col'>{record.password}</td>
							<td scope='col'>{record.type === 1 ? 'Administration' : 'Normal'}</td>
							<td scope='col'>
								<button className='btn btn-danger' onClick={() => deleteUser(record.id)}>
									<i className='fa fa-trash me-2'></i>Delete
								</button>
							</td>
						</tr>
					)
					num++
				})

				if (res.data.length < 1) {
					newRows.push(
						<td>
							<tr colspan='4'>NO Users</tr>
						</td>
					)
				}

				setData(newRows)
			})
			.catch(err => {
				console.log(err)

				newRows.push(
					<td>
						<tr colspan='4'>NO Users</tr>
					</td>
				)

				setData(newRows)
			})
	}

	const addUser = e => {
		e.preventDefault()

		const select = document.getElementById('useraddselect').value

		console.log(select)

		if (usernameRef.current.value === '' || passRef.current.value === '' || select === '')
			return alert('Please Fill All fields.')

		if (select == 0) return alert('Please select user type.')

		axios
			.get(`http://localhost:5000/api/adduser/${usernameRef.current.value}/${passRef.current.value}/${select}`)
			.then(res => {
				if (res.data.msg === 'success') getUsers()

				setAddUserMsg(res.data.msg)
			})
			.catch(err => {
				console.log(err)

				alert('Something went wrong!, try agian')
			})
	}

	return (
		<Fragment>
			<div className='w-100 bg-dark text-white m-0 mynavbar'>
				<h2 className='text-white text-capitalize m-0 pt-3 ms-2'>{userName.toUpperCase()}</h2>
			</div>
			<div className='row text-center g-0 mypage'>
				<Sidebar page='u' username={userName} userType={userType} resetUser={resetUser} navigate={navigate} />
				<div className='col-10 bg-lightblack p-2 pt-4'>
					<div className='container text-start mb-2'>
						<h1>Users</h1>
						<hr style={{ border: '2px solid black' }} />
					</div>
					<div className='mb-3'>
						<form onSubmit={addUser} className='container adduserform'>
							<input type='text' className='form-control' placeholder='Username' ref={usernameRef} />
							<input type='password' className='form-control' placeholder='Password' ref={passRef} />
							<select
								className='form-select'
								defaultValue='0'
								aria-label='Default select example'
								id='useraddselect'>
								<option value='0' disabled>
									Select User Type
								</option>
								<option value='1'>Administrator</option>
								<option value='2'>Normal</option>
							</select>
							<button className='btn btn-primary'>
								<i className='fa fa-plus'></i>
								<i className='fa fa-user me-2'></i> Add User
							</button>
						</form>
						{addUserMsg === 'success' ? (
							<p className='my-1 text-success text-center'>User Added Successfully</p>
						) : addUserMsg === 'error' ? (
							<p className='my-1 firstText text-center'>User Error</p>
						) : null}
					</div>
					<div>
						<table className='table table-hover'>
							<thead>
								<tr>
									<th scope='col'>#</th>
									<th scope='col'>Username</th>
									<th scope='col'>Password</th>
									<th scope='col'>Type</th>
									<th scope='col'></th>
									<th scope='col'></th>
								</tr>
							</thead>
							<tbody>{data}</tbody>
						</table>
					</div>
				</div>
			</div>
		</Fragment>
	)
}

export default Users
