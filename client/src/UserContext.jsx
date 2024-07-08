import React, { createContext, useState } from 'react'

const UserContext = createContext()

export const UserProvider = ({ children }) => {
	const [userName, setUserName] = useState('')
	const [userType, setUserType] = useState('')

	const resetUser = () => {
		setUserName('')
		setUserType('')
	}

	const setUser = (username, usertype) => {
		setUserName(username)
		setUserType(usertype)
	}

	return <UserContext.Provider value={{ userName, userType, resetUser, setUser }}> {children}</UserContext.Provider>
}

export default UserContext
