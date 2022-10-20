
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs'); 

const EmployeeData = mongoose.Schema({
    username:{ type:String, required:true},
    password: {type:String, required:true, mainLength:5},

  
})

const EmployeeDetails = mongoose.model("EmployeeDetails", EmployeeData);
module.exports = EmployeeDetails;




// name:{ type:String, required:true},
//     age:{ type:String, required:true},
//     gender: {type:String, required:true},
//     jobTitle: {type:String, required:true},
//     department: {type:String, required:true},
//     salary: {type:String, required:true},
//     email:{ type:String, required:true},