var express = require('express');
var app = express();

// const ngrok = require('ngrok');
// (async function () {
//     const url = await ngrok.connect();
// })();

const http = require('http');

const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

app.get('/', function (req, res) {
    res.send('Hello World!');
});

// POST method route
app.get('/contact', function (req, res) {
    console.log('console'); 
    console.log(req.body); 
    console.log(req.params.name)
    res.send('post message to home page');
})

exports

// const url = await ngrok.connect();

// const url = await ngrok.connect({
//     proto: 'http', // http|tcp|tls, defaults to http
//     addr: 8080, // port or network address, defaults to 80
//     auth: 'user:pwd', // http basic authentication for tunnel
//     subdomain: 'felix', // reserved tunnel name https://alex.ngrok.io
//     authtoken: '1RkuYpwsAY1KP6yeKf8HiVQizXo_5ek4uJyDh7KqY4MizGq6p', // your authtoken from ngrok.com
//     region: 'us', // one of ngrok regions (us, eu, au, ap), defaults to us
//     configPath: '~/git/project/ngrok.yml', // custom path for ngrok config file
//     binPath: default => default.replace('app.asar', 'app.asar.unpacked'), // custom binary path, eg for prod in electron
//     onStatusChange: status => {}, // 'closed' - connection is lost, 'connected' - reconnected
//     onLogEvent: data => {}, // returns stdout messages from ngrok process
// });



// app.listen(3000, function () {
//   console.log('Example app listening on port 3000!');
// });


