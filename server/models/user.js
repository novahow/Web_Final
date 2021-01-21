const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Creating a schema, sort of like working with an ORM
const UserSchema = new Schema({
	id: String,
	name: String,
	age: Number,
	department: String,
	FB: String,
	IG: String,
	birthday: String,
	popularity: { type: Number, default: 0 },
	photo: String,
	totalVoting: { type: Number, default: 0 },
	gender: { type: Number, default: 0 },
})

// Creating a table within database with the defined schema
const User = mongoose.model('user', UserSchema)

// Exporting table for querying and mutating
module.exports = User