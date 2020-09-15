var http = require('http')
var server = http.createServer((req, res) =>{
    res.end('hello world')
})

server.listen(3000)

console.log('server running on port 3000')

// install nodemon
// npm i -g nodemon