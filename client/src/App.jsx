import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Checkin from './Routes/admin/Checkin.jsx'
import Checkout from './Routes/admin/Checkout.jsx'
import Dashboard from './Routes/admin/Dashboard.jsx'
import Login from './Routes/admin/Login.jsx'
import Users from './Routes/admin/Users.jsx'
import Home from './Routes/Home.jsx'
import Reservation from './Routes/Reservation.jsx'
import { UserProvider } from './UserContext.jsx'

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
