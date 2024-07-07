const Checkedin = (sequelize, DataTypes) => {
	let model = sequelize.define('checkedin', {
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
		checkindate: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
	})

	sequelize
		.sync()
		.then(() => {
			console.log('CheckedIn table created successfully!')
		})
		.catch(error => {
			console.error('Unable to create table : ', error)
		})

	return model
}

const CheckedOut = (sequelize, DataTypes) => {
	let model = sequelize.define('checkout', {
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
		checkindate: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		checkoutdate: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
	})

	sequelize
		.sync()
		.then(() => {
			console.log('CheckedIn table created successfully!')
		})
		.catch(error => {
			console.error('Unable to create table : ', error)
		})

	return model
}

module.exports = { Checkedin, CheckedOut }
