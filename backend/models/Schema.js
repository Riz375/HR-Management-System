
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs'); 

const EmployeeData = mongoose.Schema({
    username:{ type:String, required:true},
    password: {type:String, required:true, mainLength:5},

  
})

const EmployeeDetails = mongoose.model("EmployeeDetails", EmployeeData);
module.exports = EmployeeDetails;



