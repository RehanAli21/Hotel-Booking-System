import React, { Fragment, useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import UserContext from '../../UserContext'
import './s.css'
import axios from 'axios'
import Sidebar from './Sidebar'
import * as dayjs from 'dayjs'

const Checkout = () => {
	const [data, setData] = useState([])
	const { userName, userType, resetUser } = useContext(UserContext)
	const navigate = useNavigate()

	useEffect(() => {
		if (userName === '' || userType === '') navigate('/admin')

		getCheckOuts()
	}, [])

	const getCheckOuts = () => {
		const newRows = []
		axios
			.get('http://localhost:5000/api/getcheckout')
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
							<td scope='col' id={`roomtype${record.id}`}>
								{record.roomtype}
							</td>
							<td scope='col' id={`checkin${record.id}`}>
								{record.checkindate}
							</td>
							<td scope='col' id={`checkout${record.id}`}>
								{record.checkoutdate}
							</td>
							<td scope='col'>
								<button onClick={() => showDateDiff(record.id)} className='btn btn-secondary'>
									Show Bill
								</button>
							</td>
						</tr>
					)
					num++
				})

				if (res.data.length < 1) {
					newRows.push(
						<td>
							<tr colspan='11'>NO CheckOut</tr>
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

	const showDateDiff = id => {
		let checkindate = document.getElementById(`checkin${id}`).innerText
		let checkoutdate = document.getElementById(`checkout${id}`).innerText
		let roomType = document.getElementById(`roomtype${id}`).innerText

		const date1 = dayjs(checkindate)
		const date2 = dayjs(checkoutdate)

		let price = roomType == 'deluxe' ? 25000 : roomType == 'luxury' ? 15000 : roomType == 'guest' ? 10000 : 5000
		let diff = date2.diff(date1, 'day') + 1
		let billAmount = price * diff

		let bill = `Bill for using ${roomType} room for ${diff} days is ${billAmount}`

		document.getElementById('billalert').style.display = ''
		document.getElementById('billalertp').innerText = bill
	}

	return (
		<Fragment>
			<div className='w-100 bg-dark text-white m-0 mynavbar'>
				<h2 className='text-white text-capitalize m-0 pt-3 ms-2'>{userName.toUpperCase()}</h2>
			</div>
			<div className='row text-center g-0 mypage'>
				<Sidebar page='co' username={userName} navigate={navigate} resetUser={resetUser} userType={userType} />
				<div className='col-10 bg-lightblack p-2 pt-4'>
					<div className='container text-start mb-2'>
						<h1>Check Out Info</h1>
						<hr style={{ border: '2px solid black' }} />
					</div>
					<div
						className='alert alert-primary py-0 pt-3'
						id='billalert'
						style={{ display: 'none' }}
						role='alert'>
						<p className='fw-bold fs-4' id='billalertp'>
							Hello
						</p>
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
									<th scope='col'>Check Out date</th>
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

export default Checkout
