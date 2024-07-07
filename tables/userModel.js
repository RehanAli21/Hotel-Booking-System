const User = (sequelize, DataTypes) => {
	let model = sequelize.define('user', {
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		username: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		admin: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
		},
	})

	sequelize
		.sync()
		.then(() => {
			console.log('User table created successfully!')
		})
		.catch(error => {
			console.error('Unable to create table : ', error)
		})

	return model
}

module.exports = { User }
