const mongoose = require('mongoose'); //Load mongoose
const connectDB = require('../modules/db.js');

connectDB(true);
const bookingSchema = new mongoose.Schema({ //Define schema
	bookingId:{
		type:Number,
		required:true,
		unique:true
	},
	startTime:{
		type:String,
		required:true,
	},
	endTime:{
		type:String,
		required:true,
	},
	date:{
		type: String,
		required:true
	}
	
});

module.exports = mongoose.model('Booking', bookingSchema);//Create and export model