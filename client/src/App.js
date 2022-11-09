import React from 'react'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import Home from './Routes/Home'
import Reservation from './Routes/Reservation'

const router = createBrowserRouter([
	{ path: '/', element: <Home /> },
	{ path: '/reservation/:roomType', element: <Reservation /> },
])

const App = () => {
	return <RouterProvider router={router} />
}

export default App
