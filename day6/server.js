const http = require('http');
const server = http.createServer((req, res) => {
    console.log(req.url);
    res.end('<h1>u know it bitchhhh</h1><p>pls excuse my lingo bitch.......</p>');
});

server.listen(3000);
console.log('Server is running on port 3000');