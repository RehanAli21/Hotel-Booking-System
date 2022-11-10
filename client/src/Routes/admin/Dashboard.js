import React, { Fragment, useContext, useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import UserContext from '../../UserContext'
import Sidebar from './Sidebar'
import '../s.css'

const Dashboard = () => {
	const [data, setData] = useState([])
	const params = useParams()
	const navigate = useNavigate()
	const { userName, userType, resetUser } = useContext(UserContext)

	useEffect(() => {
		if (!params.username) {
			if (userName === '' || userType === '') {
				navigate('/admin')
			}
		}

		getReservations()
	}, [])

	const getReservations = () => {
		const newRows = []
		axios
			.get('http://localhost:5000/api/reservation')
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
								<button onClick={() => addCheckIn(record.id)} className='btn btn-success'>
									Check In
								</button>
							</td>
							<td scope='col'>
								<button onClick={() => deleteCheckIn(record.id)} className='btn btn-danger'>
									Delete
								</button>
							</td>
						</tr>
					)
					num++
				})

				if (res.data.length < 1) {
					newRows.push(
						<td>
							<tr colspan='10'>NO RESERVATIONS</tr>
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

	const addCheckIn = id => {
		axios
			.get(`http://localhost:5000/api/addcheckin/${id}`)
			.then(res => {
				if (res.data.msg === 'error') alert('Something went Wrong!')

				if (res.data.msg === 'success') {
					getReservations()
					alert('Client CheckedIn.')
				}
			})
			.catch(err => {
				console.log(err)

				alert('Some error occured!!!')
			})
	}

	const deleteCheckIn = id => {
		axios
			.get(`http://localhost:5000/api/deletecheckin/${id}`)
			.then(res => {
				if (res.data.msg === 'error') alert('Something went Wrong!')

				if (res.data.msg === 'success') {
					getReservations()
					alert('Reservation Deleted.')
				}
			})
			.catch(err => {
				console.log(err)

				alert('Some error occured!!!')
			})
	}

	return (
		<Fragment>
			<div className='w-100 bg-dark text-white m-0 mynavbar'>
				<h2 className='text-white text-capitalize m-0 pt-3 ms-2'>{userName.toUpperCase()}</h2>
			</div>
			<div className='row text-center g-0 mypage'>
				<Sidebar page='d' username={userName} userType={userType} navigate={navigate} resetUser={resetUser} />
				<div className='col-10 bg-lightblack p-2 pt-4'>
					<div className='container text-start mb-2'>
						<h1>Reservations</h1>
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

export default Dashboard
