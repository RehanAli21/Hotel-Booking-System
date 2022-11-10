const express = require('express')
const mysql = require('mysql')

const cors = require('cors')
const app = express()

const con = mysql.createConnection({ host: 'localhost', user: 'root', password: '', database: 'hotel_management' })

con.connect(err => {
	if (err) throw err

	console.log('Database connected')
})

app.use(cors())

app.get('/', (req, res) => {
	res.send('Server is running')
})

app.get('/api/users', (req, res) => {
	let sql = 'SELECT * FROM users'

	con.query(sql, (err, result) => {
		if (err) res.status(400).send(err)

		return res.send(result)
	})
})

app.get('/api/login/:username/:password', (req, res) => {
	let username = req.params.username
	let pass = req.params.password

	let sql = `SELECT * FROM users WHERE name = '${username}' AND pass = '${pass}';`

	con.query(sql, (err, result) => {
		if (err) res.status(400).send(err)

		if (result.length === 1)
			return res.send({ successMsg: 'user found', usertype: result[0].admin == 1 ? 'admin' : 'normal' })
		else return res.send({ msg: 'user not found' })
	})

	return
})

app.get('/api/adduser/:username/:pass/:usertype', (req, res) => {
	let username = req.params.username
	let pass = req.params.pass
	let usertype = req.params.usertype

	if (username === '' || pass === '' || usertype === '') return res.send({ msg: 'error' })

	let sql = `INSERT INTO users (id, name, pass, admin) VALUES('', '${username}', '${pass}', '${usertype}')`

	con.query(sql, (err, result) => {
		if (err) return res.send({ msg: 'error' })

		if (result) return res.send({ msg: 'success' })
	})
})

app.get('/api/deleteuser/:userid', (req, res) => {
	if (req.params.userid === '') return res.send({ msg: 'error' })

	let sql = `DELETE FROM users WHERE users.id = '${req.params.userid}'`

	con.query(sql, (err, result) => {
		console.log(err)

		if (result) return res.send({ msg: 'success' })
	})
})

app.get('/api/reservation', (req, res) => {
	let sql = 'SELECT * FROM roomreservation'

	con.query(sql, (err, result) => {
		if (err) res.status(400).send(err)

		return res.send(result)
	})
})

app.get('/api/addcheckin/:id', (req, res) => {
	if (!id || id === '') return res.send({ msg: 'error' })

	let sql = `SELECT * FROM roomreservation WHERE roomreservation.id = '${req.params.id}'`

	con.query(sql, (err, result) => {
		if (err) return res.send({ msg: 'error' })

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

			sql = `INSERT INTO checkedin (id, firstname, lastname, email, cnic, number, roomnumber, roomtype, checkindate) 
			VALUES ('', '${firstname}', '${lastname}','${email}','${cnic}','${number}','${roomnumber}','${roomType}','${time}')`

			con.query(sql, (err1, result1) => {
				if (err1) return res.send({ msg: 'error' })

				if (result1) {
					sql = `DELETE FROM roomreservation WHERE roomreservation.id = '${req.params.id}'`

					con.query(sql, (err2, result2) => {
						if (err2) return res.send({ msg: 'error' })

						if (result2) {
							sql = `UPDATE rooms SET rooms.checkedIn = '1', rooms.reserved = NULL WHERE rooms.id = '${roomnumber}'`

							con.query(sql, (err3, result3) => {
								if (err3) return res.send({ msg: 'error' })

								if (result3) return res.send({ msg: 'success' })
							})
						}
					})
				}
			})
		} else {
			res.send({ msg: 'error' })
		}
	})
})

app.get('/api/deleltecheckin/:id', (req, res) => {
	if (!id || id === '') return res.send({ msg: 'error' })

	let sql = `DELETE FROM roomreservation WHERE roomreservation.id = '${req.params.id}'`

	con.query(sql, (err, result) => {
		if (err) return res.send({ msg: 'error' })

		return res.send({ msg: 'success' })
	})
})

app.get('/api/getcheckin', (req, res) => {
	let sql = 'SELECT * FROM checkedin ORDER BY checkedin.id DESC'

	con.query(sql, (err, result) => {
		if (err) res.status(400).send(err)

		return res.send(result)
	})
})

app.get('/api/addcheckout/:id', (req, res) => {
	if (!id || id === '') return res.send({ msg: 'error' })

	let sql = `SELECT * from checkedin WHERE checkedin.id = '${req.params.id}'`

	con.query(sql, (err, result) => {
		if (err) return res.send({ msg: 'error' })

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

			sql = `INSERT INTO checkout (id, firstname, lastname, email, cnic, number, roomnumber, roomtype, checkindate, checkoutdate) 
			VALUES ('', '${firstname}', '${lastname}','${email}','${cnic}','${number}','${roomnumber}','${roomType}','${time}')`

			con.query(sql, (err1, result1) => {
				if (err1) return res.send({ msg: 'error' })

				if (result1) {
					sql = `DELETE FROM checkedin WHERE checkedin.id = '${req.params.id}'`

					con.query(sql, (err2, result2) => {
						if (err2) return res.send({ msg: 'error' })

						if (result2) {
							sql = `UPDATE rooms SET rooms.checkedIn = NULL WHERE rooms.id = '${roomnumber}'`

							con.query(sql, (err3, result3) => {
								if (err3) return res.send({ msg: 'error' })

								if (result3) return res.send({ msg: 'success' })
							})
						}
					})
				}
			})
		} else {
			res.send({ msg: 'error' })
		}
	})
})

app.listen(5000, () => console.log('server connected'))
