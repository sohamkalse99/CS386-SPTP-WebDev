const mongoose = require('mongoose'); //Load mongoose
const connectDB = require('../modules/db.js');

connectDB(true);
const carSchema = new mongoose.Schema({ //Define schema
	carName:{
		type:String,
		required:true,
		unique:true
	},
	model:{
		type:String,
		required:true,
	}, 
	company:{
		type:String,
		required:true
	},
	rent:{
		type: Number,
		required:true
	},capacity:{
		type:Number,
		required:true
	}
	
});

module.exports = mongoose.model('Car', carSchema);//Create and export model