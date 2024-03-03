const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('Welcome to our home page');
    }
    else if (req.url === '/about') {
        res.end('Here is short description about our webpage.');
    }
    else if(req.url === '/contact') {
        res.end(`Contact us:
                  email: hellothereHTTP@gmail.com
                  linkedIn: hellothereHTTP`);
    }
    else {res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page that you are looking for </p>
    <a href = "/">Back Home</a>
    `);
}
})

server.listen(5000);