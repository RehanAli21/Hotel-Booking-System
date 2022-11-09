import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Checkin from './Routes/admin/Checkin'
import Checkout from './Routes/admin/Checkout'
import Dashboard from './Routes/admin/Dashboard'
import Login from './Routes/admin/Login'
import Users from './Routes/admin/Users'
import Home from './Routes/Home'
import Reservation from './Routes/Reservation'
import { UserProvider } from './UserContext'

const router = createBrowserRouter([
	{ path: '/', element: <Home /> },
	{ path: '/reservation/:roomType', element: <Reservation /> },
	{ path: '/admin', element: <Login /> },
	{ path: '/admin/users', element: <Users /> },
	{ path: '/admin/dashboard/:username', element: <Dashboard /> },
	{ path: '/admin/checkin', element: <Checkin /> },
	{ path: '/admin/checkout', element: <Checkout /> },
])

const App = () => {
	return (
		<UserProvider>
			<RouterProvider router={router} />
		</UserProvider>
	)
}

export default App
