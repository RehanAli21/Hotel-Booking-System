import React, { createContext, useState } from 'react'

const UserContext = createContext()

export const UserProvider = ({ children }) => {
	const [userName, setUserName] = useState('')
	const [userType, setUserType] = useState('')

	const resetUser = () => {
		setUserName('')
		setUserType('')
	}

	return <UserContext.Provider value={{ userName, userType, resetUser }}> {children}</UserContext.Provider>
}

export default UserContext
