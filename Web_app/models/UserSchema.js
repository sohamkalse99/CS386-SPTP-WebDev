const mongoose = require('mongoose'); //Load mongoose
const connectDB = require('../modules/db.js');

connectDB(true);
const userSchema = new mongoose.Schema({ //Define schema
	email: {
		type: String,
		required: true,
		unique:true
	},
	password:{
		type:String,
		required:true,
	},
	isAdmin:{
		type:Boolean,
		required:true,
		default:false
	}
	
});

module.exports = mongoose.model('User', userSchema);//Create and export model