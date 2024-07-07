const express = require('express')
const { Sequelize, DataTypes, where } = require('sequelize')
const { User } = require('./tables/userModel')
const { RoomReservation, Rooms } = require('./tables/roomModel')
const { Checkedin, CheckedOut } = require('./tables/checkModel')
const mysql = require('mysql')

const cors = require('cors')
const app = express()

const sequelize = new Sequelize('hotel_management', 'root', '', {
	host: 'localhost',
	dialect: 'mysql',
})

const UserTable = User(sequelize, DataTypes)
const RoomsReservationTable = RoomReservation(sequelize, DataTypes)
const RoomsTable = Rooms(sequelize, DataTypes)
const CheckedInTable = Checkedin(sequelize, DataTypes)
const CheckedOutTable = CheckedOut(sequelize, DataTypes)

try {
	sequelize.authenticate()
	console.log('Connection has been established successfully.')
} catch (error) {
	console.error('Unable to connect to the database:', error)
}

app.use(cors())

app.get('/', (req, res) => {
	return res.send('Server is running')
})

app.get('/api/login/:username/:password', async (req, res) => {
	let username = req.params.username
	let pass = req.params.password

	try {
		const user = UserTable.findOne({ username: username, password: pass })

		if (!user) return res.send({ msg: 'user not found' })

		return res.send({ successMsg: 'user found', usertype: user.admin == 1 ? 'admin' : 'normal' })
	} catch (err) {
		return res.send({ msg: 'user not found' })
	}
})

app.get('/api/adduser/:username/:pass/:usertype', async (req, res) => {
	let username = req.params.username
	let pass = req.params.pass
	let usertype = req.params.usertype

	if (username === '' || pass === '' || usertype === '') return res.send({ msg: 'error' })

	try {
		await UserTable.create({
			username: username,
			password: pass,
			admin: usertype,
		})

		return res.send({ msg: 'success' })
	} catch (err) {
		return res.send({ msg: 'error' })
	}
})

app.get('/api/deleteuser/:userid', async (req, res) => {
	if (req.params.userid === '') return res.send({ msg: 'error' })

	try {
		await UserTable.destroy({ where: { id: req.params.userid } })

		return res.send({ msg: 'success' })
	} catch (err) {
		console.log(err)
		return res.send({ msg: 'error' })
	}
})

app.get('/api/addReservation/:fn/:ln/:e/:cnic/:num/:rt/:nr/:checkin', async (req, res) => {
	const fname = req.params.fn
	const lname = req.params.ln
	const email = req.params.e
	const cnic = req.params.cnic
	const number = req.params.num
	const roomType = req.params.rt
	const numberofrooms = req.params.nr
	const checkin = req.params.checkin

	if (
		fname &&
		fname !== '' &&
		lname &&
		lname !== '' &&
		email &&
		email !== '' &&
		cnic &&
		cnic !== '' &&
		number &&
		number !== '' &&
		roomType &&
		roomType !== '' &&
		numberofrooms &&
		numberofrooms !== '' &&
		checkin &&
		checkin !== ''
	) {
		let result

		try {
			result = await RoomsTable.findAll({
				limit: numberofrooms,
				where: { reserved: null, checkedIn: null, type: roomType },
			})
		} catch (err) {
			return res.send({ msg: 'error' })
		}

		if (result.length > 0) {
			result.forEach(async record => {
				let roomNumber = record.id

				try {
					await RoomsTable.update({ reserved: '1' }, { where: { id: roomNumber } })

					await RoomReservationTable.create({
						firstname: fname,
						lastname: lname,
						email: email,
						cnic: cnic,
						number: number,
						roomnumber: roomNumber,
						roomtype: roomType,
						numberofrooms: numberofrooms,
						checkindate: checkin,
					})
				} catch (err) {
					return res.send({ msg: 'reservation error' })
				}
			})

			return res.send({ msg: 'success' })
		} else {
			return res.send({ msg: 'no rooms available' })
		}
	} else {
		return res.send({ msg: 'error' })
	}
})

app.get('/api/reservation', async (req, res) => {
	try {
		let result = await RoomsReservationTable.findAll()

		return res.send(result)
	} catch (err) {
		return res.status(400).send(err)
	}
})

app.get('/api/addcheckin/:id', async (req, res) => {
	if (!req.params.id || req.params.id === '') return res.send({ msg: 'error' })

	try {
		let result = await RoomsReservationTable.findAll({ where: { id: req.params.id } })

		if (result && result.length > 0) {
			const firstname = result[0].firstname
			const lastname = result[0].lastname
			const email = result[0].email
			const cnic = result[0].cnic
			const number = result[0].number
			const roomnumber = result[0].roomnumber
			const roomType = result[0].roomtype

			// declare time variable with formate of year-month-day
			const date = new Date()

			const time = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`

			await CheckedInTable.create({
				firstname: firstname,
				lastname: lastname,
				email: email,
				cnic: cnic,
				number: number,
				roomnumber: roomnumber,
				roomtype: roomType,
				checkindate: time,
			})

			await RoomsReservationTable.destroy({ where: { id: req.params.id } })

			await RoomsTable.update({ checkedIn: '1', reserved: null }, { where: { id: roomnumber } })

			return res.send({ msg: 'success' })
		}
	} catch (err) {
		return res.send({ msg: 'error' })
	}
})

app.get('/api/deletecheckin/:id', async (req, res) => {
	if (!req.params.id || req.params.id === '') return res.send({ msg: 'error' })

	try {
		await RoomsReservationTable.destroy({ where: { id: req.params.id } })

		return res.send({ msg: 'success' })
	} catch (err) {
		return res.send({ msg: 'error' })
	}
})

app.get('/api/getcheckin', async (req, res) => {
	try {
		let result = await CheckedInTable.findAll({
			order: [['id', 'DESC']],
		})
		return res.send(result)
	} catch (err) {
		return res.status(400).send(err)
	}
})

app.get('/api/addcheckout/:id', async (req, res) => {
	if (!req.params.id || req.params.id === '') return res.send({ msg: 'error' })

	try {
		let result = await CheckedInTable.findAll({ where: { id: req.params.id } })

		if (result && result.length > 0) {
			const firstname = result[0].firstname
			const lastname = result[0].lastname
			const email = result[0].email
			const cnic = result[0].cnic
			const number = result[0].number
			const roomnumber = result[0].roomnumber
			const roomType = result[0].roomtype
			const checkindate = result[0].checkindate

			// declare time variable with formate of year-month-day
			const date = new Date()

			const time = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`

			await CheckedOutTable.create({
				firstname: firstname,
				lastname: lastname,
				email: email,
				cnic: cnic,
				number: number,
				roomnumber: roomnumber,
				roomtype: roomType,
				checkindate: checkindate,
				checkoutdate: time,
			})

			await CheckedInTable.destroy({ where: { id: req.params.id } })

			await RoomsTable.update({ checkedIn: null }, { where: { id: roomnumber } })

			return res.send({ msg: 'success' })
		}
	} catch (err) {
		return res.send({ msg: 'error' })
	}
})

app.get('/api/getcheckout', async (req, res) => {
	try {
		let result = await CheckedOutTable.findAll({
			order: [['id', 'DESC']],
		})

		return res.send(result)
	} catch (err) {
		return res.status(400).send(err)
	}
})

app.listen(5000, () => console.log('server connected'))
