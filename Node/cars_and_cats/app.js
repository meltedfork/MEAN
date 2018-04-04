// get the http module:
var http = require('http');
// fs module allows us to read and write content for responses!!
var fs = require('fs');
// creating a server using http module:
var server = http.createServer(function (request, response){
    // see what URL the clients are requesting:
    console.log('client request URL: ', request.url);
    // this is how we do routing:
    if(request.url == '/cars') {
        fs.readFile('views/cars.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents); 
            response.end();
        });
    }
    else if(request.url === '/cats') {
         fs.readFile('views/cats.html', 'utf8', function (errors, contents){
             response.writeHead(200, {'Content-type': 'text/html'});
             response.write(contents); 
             response.end();
         });
    }
    else if(request.url === '/images/italiano.jpeg') {
        fs.readFile('./images/italiano.jpeg', function (errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpeg'});
            response.write(contents); 
            response.end();
        });
   }
   else if(request.url === '/images/vansBoo.jpeg') {
        fs.readFile('./images/vansBoo.jpeg', function (errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpeg'});
            response.write(contents); 
            response.end();
        });
    }
    else if(request.url === '/images/victoria.jpeg') {
        fs.readFile('./images/victoria.jpeg', function (errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpeg'});
            response.write(contents); 
            response.end();
        });
   }
   else if(request.url === '/images/jumpRum.jpeg') {
        fs.readFile('./images/jumpRum.jpeg', function (errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpeg'});
            response.write(contents); 
            response.end();
        });
    }
    else if(request.url === '/cars/new') {
        fs.readFile('views/newcar.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents); 
            response.end();
        });
    }
    // request didn't match anything:
    else {
        response.end('File not found!!!');
    }
});
// tell your server which port to run on
server.listen(7077);
// print to terminal window
console.log("Running in localhost at port 7077");