const mongoose = require('mongoose'); //Load mongoose
const connectDB = require('./modules/db.js');

connectDB(true);
const userSchema = new mongoose.Schema({ //Define schema
	firstName: {
		type: String,
	},
	lastName: {
		type: String,
	},
	DateTime: {
		type: String,
	},
	
});

module.exports = mongoose.model('User', userSchema);//Create and export model

// const User = mongoose.model('User', userSchema);//Create and export model

// const regUser = {
//     firstName: 'John',
//     lastName: 'Doe',
//     DateTime: new Date().toLocaleString()
// };


// const newUser = new User(regUser);

// newUser.save()
//     .then(function(){
//         console.log('user saved:', regUser);
//         connectDB(false);
//     },
//     function(err){
//         console.log(err);
//     }
//     );





