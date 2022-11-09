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

		const data = []

		result.forEach(row => {
			data.push({ id: row.id, name: row.name, password: row.pass, type: row.admin })
		})

		return res.send(data)
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

app.listen(5000, () => console.log('server connected'))
