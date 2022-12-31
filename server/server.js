//Creating a server
const http = require('http');

//file system to read index.html
const fs = require('fs');

const _ = require('lodash');

const server = http.createServer((req, res) => {

    //lodash
    const num = _.random(0, 20);
    console.log(num);

    //this will let the function only load once
    const greet = _.once(() => {
        console.log('hello');
    });
    greet();
    greet();
    greet();

    console.log(req.url, req.method);

    //set header content type
    //content-type can be text/plain text/html or etc.
    res.setHeader('Content-Type', 'text/html');

    let path = "./views";
    switch(req.url){
        case '/':
            path += "/index.html";
            res.statusCode = 200;
            break;
        case '/about':
            path += '/about.html';
            res.statusCode = 200;
            break;
        case '/about-me':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break;
        default:
            path += '/404.html';
            res.statusCode = 404;
            break;
    }

    //on response read the file index.html and return 
    fs.readFile(path, (err, data) => {
        if(err){
            console.log(err);
            res.end();
        }
        else{
            // res.write(data); Only need if we need to do this step multiple times otherwise
            res.end(data);
        }
    })
});

//until calling listen the server don't work
server.listen(3000, 'localhost', () => {
     console.log('listening for request on port 3000')
});




// res.setHeader('Content-Type', 'text/plain');
// res.write('Hello, ninjas');
// res.end();

// res.setHeader('Content-Type', 'text/html');
// res.write('<h2>Hello, ninjas</h2>');
// res.write('<p>Hello, ninjas</p>');
// res.end();