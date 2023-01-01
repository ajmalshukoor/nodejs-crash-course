const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');

//express app
const app = express();

//connect to mongoDB
const dbURI = 'mongodb+srv://ajmal:test123@cluster0.5ce9bea.mongodb.net/node-tuts';
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
.then((result) => app.listen(3000))
.catch((err) => console.log(err))

//register view engine
app.set('view engine', 'ejs');

//middleware and static files
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}))
app.use(morgan('dev'));

//mongoose and mongo sandbox routes

//get request 
app.get('/', (req, res) => {
    res.redirect('/blogs');
}) 

app.get('/about', (req, res) => {
    res.render('about', {title: "About"})
})

//blog routes - this use middleware look at the blogRoutes and apply here
app.use('/blogs', blogRoutes);

//This runs every time when the request reach this far
//if any url matches above items it stops there, otherwise, this trigger

//DONT PLACE THIS IN BETWEEN OTHER ROUTES!!!!
app.use((req, res) => {
    res.status(404).render('404', {title: "404"});
})
