import React, { Fragment, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import UserContext from '../../UserContext'

import Sidebar from './Sidebar'

const Users = () => {
	const navigate = useNavigate()
	const { userName, userType, resetUser } = useContext(UserContext)

	useEffect(() => {
		if (userName === '' || userType === '' || userType !== 'admin') navigate('/admin/dashboard')
	}, [])

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
						<form action='#' method='post' className='container adduserform'>
							<input type='text' className='form-control' name='username' placeholder='Username' />
							<input type='password' className='form-control' name='pass' placeholder='Password' />
							<select className='form-select' aria-label='Default select example' name='type'>
								<option selected disabled>
									Select User Type
								</option>
								<option value='1'>Administrator</option>
								<option value='2'>Normal</option>
							</select>
							<button className='btn btn-primary' name='adduser'>
								<i className='fa fa-plus'></i>
								<i className='fa fa-user me-2'></i> Add User
							</button>
						</form>
						{/* <?php
                if (isset($_POST['adduser'])) {
                    $username = $_POST['username'];
                    $pass = $_POST['pass'];
                    $type = $_POST['type'];

                    if ($username && $pass && $type) {
                        $sql = "INSERT INTO users (id, name, pass, admin) VALUES('', '$username', '$pass', '$type');";

                        if (mysqli_query($con, $sql)) {
                            echo "<p className='my-1 text-success text-center'>User Added Successfully</p>";
                        } else {
                            echo "<p className='my-1 firstText text-center'>User Error</p>";
                        }
                    }
                }
            ?> */}
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
							<tbody>
								{
									// <?php
									//     $sql = "SELECT * FROM users;";
									//     $result = mysqli_query($con, $sql);
									//     if ($result) {
									//         $id = 0;
									//         while ($row = mysqli_fetch_array($result)) {
									//             $name = $row['name'];
									//             $pass = $row['pass'];
									//             $admin = $row["admin"] == 1 ? "Administrator" : "Normal";
									//             echo "<tr>
									//             <td scope='col'>".$id."</td>
									//             <td scope='col'>".$name."</td>
									//             <td scope='col'>".$pass."</td>
									//             <td scope='col'>".$admin."</td>
									//             <td scope='col'><a href='deleteuser.php?eid=".$row['id']."'><button className='btn btn-danger'><i className='fa fa-trash me-2'></i>Delete</button></a></td>
									//         </tr>";
									//         $id++;
									//         }
									//     } else {
									//         echo "<td><tr colspan='4'>NO Users</tr></td>";
									//     }
									// ?>
								}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</Fragment>
	)
}

export default Users
