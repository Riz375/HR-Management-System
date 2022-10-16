
const express = require('express');
const app = express();
require('../database/conn');
const Schema = require('../models/Schema');
const cors = require('cors');
// const { hydrate } = require('../models/Schema');
const EmployeeDetails = require('../models/Schema');
const jwt = require('jsonwebtoken');
// require('dotenv').config();
// const fsPromises = require('fs').promises;
// const path = require('path');
// const { readdirSync } = require('fs');
// import jwtDecode from 'jwt-decode'
const bcrypt = require('bcryptjs'); 


app.use(express.json());
app.use(cors());

// API to get 
app.get('/', (req,res) =>{
    res.send('login');

})

// API to get login page
app.get('/loginpage', (req,res)=>{
    res.send('login page')
})



        // API to retrieve user login data from database
app.post('/loginpage', async(req, res) => {
    // const {username, password} = req.body
    const username = req.body.username 
    // const password = req.body.password
    console.log(req.body)

    

    
    // const newPassword = await bcrypt.hash(req.body.password, 10)
    // password: newPassword
    // password = newPassword

    const user = await EmployeeDetails.findOne(({username:username}));
    // if(!user) {return { status: 'error', error:'Invalid login'}}

    // const isPasswordValid = await bcrypt.compare(req.body.password, user.password)

    // if(isPasswordValid) {
    //     const token = jwt.sign(
    //         {
    //             username: user.username,
                
    //         },
    //         'secret123'
    //     )
    // }

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


////////
///const user = jwt.decode(token)

//
// if (token) {
//     const user = jwtDecode(token)
//     if(!user) {
//         localStorage.removeItem('token')
//         navigate("/login", { replace: true })
//     } else {
//         populateQuote()

//     }
// }






// app.post('/logout')




app.listen(4000, ()=>
{
    console.log("Server is running on port 4000")
}); 