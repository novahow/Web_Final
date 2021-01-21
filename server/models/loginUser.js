const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Creating a schema, sort of like working with an ORM
const LoginUserSchema = new Schema({
	id: String,
	name: String,
	passwd: String,
	favorite: [String],
})

// Creating a table within database with the defined schema
const LoginUser = mongoose.model('loginUser', LoginUserSchema)

// Exporting table for querying and mutating
module.exports = LoginUser