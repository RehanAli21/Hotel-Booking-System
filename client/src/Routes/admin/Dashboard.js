import React, { Fragment, useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import UserContext from '../../UserContext'
import Sidebar from './Sidebar'
import '../s.css'

const Dashboard = () => {
	const params = useParams()
	const navigate = useNavigate()
	const { userName, userType, resetUser } = useContext(UserContext)

	useEffect(() => {
		if (!params.username) {
			if (userName === '' || userType === '') {
				navigate('/admin')
			}
		}
	}, [])

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
							<tbody>
								{/* <?php
                        $sql = "SELECT * FROM roomreservation;";

                        $result = mysqli_query($con, $sql);

                        if ($result) {
                            $id = 0;
                            while ($row = mysqli_fetch_array($result)) {
                                echo "<tr>
                                <td scope='col'>".$id."</td>
                                <td scope='col'>".$row['firstname']."</td>
                                <td scope='col'>".$row['lastname']."</td>
                                <td scope='col'>".$row['email']."</td>
                                <td scope='col'>".$row['number']."</td>
                                <td scope='col'>".$row['cnic']."</td>
                                <td scope='col'>".$row['roomnumber']."</td>
                                <td scope='col'>".$row['roomtype']."</td>
                                <td scope='col'>".$row['checkindate']."</td>
                                <td scope='col'><a href='addcheckin.php?eid=".$row['id']."'><button className='btn btn-success'>Check In</button></a></td>
                                <td scope='col'><a href='deletecheckin.php?eid=".$row['id']."'><button className='btn btn-danger'>Delete</button></a></td>
                            </tr>";
                            $id++;
                            }
                        } else {
                            echo "<td><tr colspan='10'>NO RESERVATIONS</tr></td>";
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

export default Dashboard
