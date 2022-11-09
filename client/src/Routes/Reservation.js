import React from 'react'
import { useParams } from 'react-router-dom'
import './s.css'

const Reservation = () => {
	const params = useParams()

	return (
		<React.Fragment>
			<div className='container'>
				<h1 className='mt-5'>RESERVATION</h1>
				<a href='index.php' className='text-white' style={{ textDecoration: 'none' }}>
					<button className='btn btn-primary' style={{ position: 'absolute', right: '20%', top: '50px' }}>
						Back
					</button>
				</a>
				<hr />
				<form method='POST'>
					<div className='w-100 container row'>
						<div className='col-sm-12 col-md-12 col-lg-6 col-xl-6 bg-white px-0'>
							<h3 className='fw-bold bgthird text-white px-4 py-2'>PERSONAL INFORMATION</h3>
							<div className='container'>
								<div className='my-3 form-group'>
									<label htmlFor='firstname' className='form-label'>
										First Name
									</label>
									<input type='text' className='form-control' id='firstname' name='firstname' />
								</div>
								<div className='my-3 form-group'>
									<label htmlFor='lastname' className='form-label'>
										Last Name
									</label>
									<input type='text' className='form-control' id='lastname' name='lastname' />
								</div>
								<div className='my-3 form-group'>
									<label htmlFor='email' className='form-label'>
										Email
									</label>
									<input type='email' className='form-control' id='email' name='email' />
								</div>
								<div className='my-3 form-group'>
									<label htmlFor='cnic' className='form-label'>
										CNIC
									</label>
									<input type='text' className='form-control' id='cnic' name='cnic' />
								</div>
								<div className='my-3 form-group'>
									<label htmlFor='number' className='form-label'>
										Phone Number
									</label>
									<input type='text' className='form-control' id='number' name='number' />
								</div>
							</div>
						</div>
						<div className='col-sm-12 col-md-12 col-lg-6 col-xl-6 bg-white px-0 border-start border-5 border-light'>
							<h3 className='fw-bold bgthird text-white px-4 py-2'>RESERVATION INFORMATION</h3>
							<div className='container'>
								<div className='my-3 form-group'>
									<label htmlFor='roomtype' className='form-label'>
										Type Of Room
									</label>
									<select
										className='form-select'
										id='roomtype'
										name='roomtype'
										defaultValue={params.roomType}>
										<option value='deluxe'>Deluxe Room</option>
										<option value='luxury'>Luxury Room</option>
										<option value='guest'>Guest House</option>
										<option value='single'>Single Room</option>
									</select>
								</div>
								<div className='my-3 form-group'>
									<label htmlFor='numberofrooms' className='form-label'>
										Number of Rooms
									</label>
									<input
										type='text'
										className='form-control'
										id='numberofrooms'
										name='numberofrooms'
									/>
								</div>
								<div className='my-3'>
									<label htmlFor='checkin' className='form-label'>
										Check-In
									</label>
									<input type='date' className='form-control' id='checkin' name='checkin' />
								</div>
								<button className='btn btn-primary w-100 my-4' name='reservationSubmit'>
									Submit
								</button>
							</div>
						</div>
					</div>
				</form>
				<iframe name='frame' style={{ display: 'none' }}></iframe>
			</div>
		</React.Fragment>
	)
}

export default Reservation
