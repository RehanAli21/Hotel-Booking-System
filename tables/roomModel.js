const RoomReservation = (sequelize, DataTypes) => {
	let model = sequelize.define('roomreservation', {
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		firstname: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		lastname: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		cnic: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		number: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		roomnumber: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		roomtype: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		numberofrooms: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		checkindate: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	})

	sequelize
		.sync()
		.then(() => {
			console.log('RoomReservation table created successfully!')
		})
		.catch(error => {
			console.error('Unable to create table : ', error)
		})

	return model
}

const Rooms = (sequelize, DataTypes) => {
	let model = sequelize.define('rooms', {
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		type: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		price: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		checkedin: {
			type: DataTypes.INTEGER,
			allowNull: true,
		},
		reserved: {
			type: DataTypes.STRING,
			allowNull: true,
		},
	})

	sequelize
		.sync()
		.then(() => {
			console.log('Rooms table created successfully!')
		})
		.catch(error => {
			console.error('Unable to create table : ', error)
		})

	// run it when running project first time to insert rooms data table
	// let res = await model.findAll()

	// if (res.length !== 86) {
	// 	let data = [
	// 		['deluxe', 25000, 12],
	// 		['luxury', 15000, 20],
	// 		['guest', 10000, 24],
	// 		['single', 5000, 30],
	// 	]

	// 	for (let e in data) {
	// 		for (let i = 0; i < data[e][2]; i++) {
	// 			model.create({ type: data[e][0], price: data[e][1] })
	// 		}
	// 	}
	// }

	return model
}

module.exports = { RoomReservation, Rooms }
