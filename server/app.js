const express = require('express');

//express app
const app = express();

//register view engine
app.set('view engine', 'ejs');

// listen for requests
app.listen(3000); 

//get request 
app.get('/', (req, res) => {

    const blogs = [
        {title: 'Yoshi finds eggs', snippet: "This is the snippet for Yoshi finds eggs"},
        {title: 'Mario finds stars', snippet: "This is the snippet for Mario finds stars"},
        {title: 'How to defeat bowser', snippet: "This is the snippet for How to defeat bowser"}
    ];
    res.render('index', {title: "Home", blogs});
})
//for the static html pages
// app.get('/', (req, res) => {
//     // res.send('<p>home page</p>');
//     //{root: __dirname} makes an absolute path
//     res.sendFile('./views/index.html', {root: __dirname});
// })

app.get('/about', (req, res) => {
    res.render('about', {title: "About"})
})

app.get('/blogs/create', (req, res) => {
    res.render('create', {title: "Create a new Blog"} )
})

//redirects
app.get('/about-us', (req, res) => {
    res.redirect('/about')
})

//This runs every time when the request reach this far
//if any url matches above items it stops there, otherwise, this trigger

//DONT PLACE THIS IN BETWEEN OTHER ROUTES!!!!
app.use((req, res) => {
    res.status(404).render('404', {title: "404"});
})