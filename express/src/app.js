
// Requiring express framework
// Requiring path module - helps access file paths and directories
// Requiring hbs modlue
const express = require('express');
const app = express();
const path=require('path');
const hbs=require('hbs');
const viewsPath=path.join(__dirname,'../template/views');
const partialsPath=path.join(__dirname,"../template/partials");

// Setting static path so have access to public/css folders
const staticPath=path.join(__dirname,"../public");
app.use(express.static(staticPath));

// Setting the view engine
app.set('view engine', 'hbs');
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);



// get request to render pages
app.get('/', (req, ress) => {
    ress.render('index');
})
app.get('/login', (req, ress) =>{
    ress.render('login')
})
app.get('/departments', (req,ress) => {
    ress.render('departments');
})
app.get('/qualifications', (req, ress) =>{
    ress.render('qualifications');
})
app.get('/employee', (req, ress) => {
    ress.render('employee');
})

app.listen(3001, () =>
{
    console.log('Server is listening at localhost:3001'); 
});