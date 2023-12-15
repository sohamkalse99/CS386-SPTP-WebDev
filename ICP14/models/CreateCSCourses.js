const mongoose = require('mongoose');
let schemaUser = mongoose.Schema({
    
    courseID:{
        type:String,
        required:true,
        unique: true
    },
    name:{
        type:String,
        required:true,
        default:'unknown'
    },
    preReqs:{
        type:[String],
        required:true,
        default:'unknown'
    },
    active:{
        type:Boolean,
        required:true,
        default:true
    }

})

module.exports = mongoose.model('CSCourse', schemaUser);