// Connecting to the database
const mongoose=require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/hr-management-system",{
    useNewUrlParser:true,
    useUnifiedTopology:true  
}).then(()=>
{
    console.log("Connection to database successful")
}).catch((err)=>
{
    console.log('Connection to database unsucessful');
    console.log(err);
})
