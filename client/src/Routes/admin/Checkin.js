import React, { Fragment, useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import '../s.css'
import UserContext from '../../UserContext'
import Sidebar from './Sidebar'
import axios from 'axios'

const Checkin = () => {
	const [data, setData] = useState([])
	const { userName, userType, resetUser } = useContext(UserContext)
	const navigate = useNavigate()

	useEffect(() => {
		if (userName === '' || userType === '') navigate('/admin')

		getCheckedIn()
	}, [])

	const addCheckOut = id => {
		axios
			.get(`http://localhost:5000/api/addcheckout/${id}`)
			.then(res => {
				if (res.data.msg === 'error') alert('Something went Wrong!')

				if (res.data.msg === 'success') {
					getCheckedIn()
					alert('Client Checked Out.')
				}
			})
			.catch(err => {
				console.log(err)

				alert('Some error occured!!!')
			})
	}

	const getCheckedIn = () => {
		const newRows = []
		axios
			.get('http://localhost:5000/api/getcheckin')
			.then(res => {
				let num = 1
				res.data.forEach(record => {
					newRows.push(
						<tr key={num}>
							<td scope='col'>{num}</td>
							<td scope='col'>{record.firstname}</td>
							<td scope='col'>{record.lastname}</td>
							<td scope='col'>{record.email}</td>
							<td scope='col'>{record.number}</td>
							<td scope='col'>{record.cnic}</td>
							<td scope='col'>{record.roomnumber}</td>
							<td scope='col'>{record.roomtype}</td>
							<td scope='col'>{record.checkindate}</td>
							<td scope='col'>
								<button onClick={() => addCheckOut(record.id)} className='btn btn-warning'>
									Check Out
								</button>
							</td>
						</tr>
					)
					num++
				})

				if (res.data.length < 1) {
					newRows.push(
						<td>
							<tr colspan='10'>NO Check Ins</tr>
						</td>
					)
				}

				setData(newRows)
			})
			.catch(err => {
				console.log(err)
				alert('Something went wrong!')
			})
	}

	return (
		<Fragment>
			<div className='w-100 bg-dark text-white m-0 mynavbar'>
				<h2 className='text-white text-capitalize m-0 pt-3 ms-2'>{userName.toUpperCase()}</h2>
			</div>
			<div className='row text-center g-0 mypage'>
				<Sidebar page='ci' username={userName} navigate={navigate} resetUser={resetUser} userType={userType} />
				<div className='col-10 bg-lightblack p-2 pt-4'>
					<div className='container text-start mb-2'>
						<h1>Check In Info</h1>
						<hr style={{ border: '2px solid black' }} />
					</div>
					<div>
						<table className='table table-hover'>
							<thead>
								<tr>
									<th scope='col'>#</th>
									<th scope='col'>First Name</th>
									<th scope='col'>Last Name</th>
									<th scope='col'>Email</th>
									<th scope='col'>Number</th>
									<th scope='col'>CNIC</th>
									<th scope='col'>Room No:</th>
									<th scope='col'>Room Type</th>
									<th scope='col'>Check In date</th>
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

export default Checkin
