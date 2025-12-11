const http = require('http')
const url = require('url')

/*const server = http.createServer((req, res) => {

})

const port = 3000

server.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`)
})

const server = http.createServer((req, res) => {
    if (req.method === 'GET' & req.url === '/') {
        res.writeHead(200, {'content-type': 'text/plain'})
        res.end('welcome to homepage')
    }else {
        res.writeHead(404, {'content-type': 'text/plain'})
        res.end('page not found')
    }

})

const port = 3000

server.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`)
})

const server = http.createServer((req, res) => {
    if (req.method === 'POST' & req.url === '/submit') {
        let body = ''

        req.on('data', (chunk) => {
            body += chunk.toString()
        })

        req.on('end', () => {
            res.writeHead(200,{'content-type': 'application/JSON'})
            res.end(JSON.stringify({message: 'data recieved', data:body}))
        })
    }else {
        res.writeHead(404, {'content-type': 'text/plain'})
        res.end('page not found')
    }

})

const port = 3000

server.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`)
})*/

const server = http.createServer((req, res) => {
    if (req.method === 'GET' & req.url.startsWith('/search')) {
        const queryobject = url.parse(req.url, true).query
        res.writeHead(200, {
            'content-type': 'application/json',
            'custom-header': 'node.js server',
            'custom-tracking': '1234'
        })
        res.end(JSON.stringify({message: 'query recieved', queryobject}))
    }else {
        res.writeHead(404, {'content-type': 'text/plain'})
        res.end('page not found')
    }

})

const port = 3000

server.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`)
})