import React, { Fragment, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import UserContext from '../../UserContext'
import Sidebar from './Sidebar'
import * as dayjs from 'dayjs'

const Checkout = () => {
	const { userName, userType, resetUser } = useContext(UserContext)
	const navigate = useNavigate()

	useEffect(() => {
		if (userName === '' || userType === '') navigate('/admin')
	}, [])

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
							<tbody>
								{/* <?php
                        $sql = "SELECT * FROM checkout order by checkout.id desc;";

                        $result = mysqli_query($con, $sql);

                        if ($result) {
                            $id = 0;
                            while ($row = mysqli_fetch_array($result)) {
                                echo '<tr>
                                <td scope="col">'.$id.'</td>
                                <td scope="col">'.$row['firstname'].'</td>
                                <td scope="col">'.$row['lastname'].'</td>
                                <td scope="col">'.$row['email'].'</td>
                                <td scope="col">'.$row['number'].'</td>
                                <td scope="col">'.$row['cnic'].'</td>
                                <td scope="col">'.$row['roomnumber'].'</td>
                                <td scope="col" id="roomtype'.$id.'">'.$row['roomtype'].'</td>
                                <td scope="col" id="checkin'.$id.'">'.$row['checkindate'].'</td>
                                <td scope="col" id="checkout'.$id.'">'.$row['checkoutdate'].'</td>
                                <td scope="col"><button className="btn btn-secondary" onClick="showDateDiff('.$id.')">Show Bill</button></td>
                            </tr>';
                            $id++;
                            }
                        } else {
                            echo "<td><tr colspan='11'>NO CheckOut</tr></td>";
                        }
                    ?> */}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</Fragment>
	)
}

export default Checkout
