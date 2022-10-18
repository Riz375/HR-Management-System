
const express = require('express');
const app = express();
require('../database/conn');
const cors = require('cors');
const EmployeeDetails = require('../models/Schema');
const jwt = require('jsonwebtoken');


// need to use for code to work
app.use(express.json());
app.use(cors());





// API to get login page
app.get('/loginpage', (req,res)=>{
    res.send('login page')
})



// API to retrieve user login data from database
app.post('/loginpage', async(req, res) => {
    const {username, password} = req.body
    console.log(req.body)

    const user = await EmployeeDetails.findOne(({username:username}));

    if(user){
        const token = jwt.sign(
            {
                username: user.username,
            }, 'secret123')

                return res.json({status: 'ok', user:token})
            }else{
                return res.json({status: 'error', user: false})
        
            }
})



// app.post('/logout')




app.listen(4000, ()=>
{
    console.log("Server is running on port 4000")
}); 