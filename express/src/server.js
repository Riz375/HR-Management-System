
const express = require('express');
const app = express();
require('../database/conn');
const Schema = require('../models/Schema');
const cors = require('cors');
const { hydrate } = require('../models/Schema');
const EmployeeDetails = require('../models/Schema');


app.use(express.json());
app.use(cors());

// reading data from mongodb
// router.get('/:id', (req,res)=>{

// })
//ROUTES
app.get('/', (req,res) =>{
    res.send('login');

})
app.get('/loginpage', (req,res)=>{
    res.send('login page')
})

app.post('/loginpage', async(req, res) => {
    const {username, password} = req.body
    console.log(req.body)

    const user = await EmployeeDetails.findOne(({username:username}));
    if(user){
                return res.json({status: 'ok', user:true})
            }else{
                return res.json({status: 'error', user: false})
        
            }
})



app.listen(4000, ()=>
{
    console.log("Server is running on port 4000")
});