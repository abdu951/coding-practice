const http = require('http')
const path = require('path')
const url = require('url')
const querystring = require('querystring')

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
})

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

const routes = {
    '/': (req, res) => {
        res.writeHead(200,{'content-type': 'text-plain'})
        res.end('welcome to homepage')
    },

    '/about': (req, res) => {
        res.writeHead(200,{'content-type': 'text-plain'})
        res.end('welcome to aboutpage')
    },

    '/notfound': (req, res) => {
        res.writeHead(404,{'content-type': 'text-plain'})
        res.end('page not found')
    }
}

const server = http.createServer((req, res) => {
    const { pathname } = url.parse(req.url)
    if (routes[pathname]) {
        routes[pathname](req, res)
    } else {
        routes['/notfound'](req, res)
    }
})

const port = 3000

server.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`)
})

const server = http.createServer((req, res) => {
    const { pathname } = url.parse(req.url)
    if (pathname.startsWith('/user/')) {
        const userid = pathname.split('/')[2]
        res.writeHead(200, {'content-type': 'text/plain'})
        res.end(`user id : ${userid}`)
    } else {
        res.writeHead(404, {'content-type': 'text/plain'})
        res.end('routes not found')
    }
})

const port = 3000

server.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`)
})

function logrequest(req,res,next) {
    console.log(`${req.method} request made to ${req.url}`)
    next(req,res)
}
const server = http.createServer((req, res) => {
    logrequest(req,res,(req,res) => {
        const { pathname } = url.parse(req.url)
    if (pathname.startsWith('/user/')) {
        const userid = pathname.split('/')[2]
        res.writeHead(200, {'content-type': 'text/plain'})
        res.end(`user id : ${userid}`)
    } else {
        res.writeHead(404, {'content-type': 'text/plain'})
        res.end('routes not found')
    }
     
    })
    
})

const port = 3000

server.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`)
})*/

const server = http.createServer((req, res) => {
    if (req.method === 'POST' & req.url === '/submit') {
        let data = ''

        req.on('data', (chunk) => {
            data += chunk
        })

        req.on('end', () => {
            const parsedData = querystring.parse(data)
            res.writeHead(200,{'content-type': 'application/JSON'})
            res.end(JSON.stringify({message: 'form data recieved', parsedData}))
        })
    }else {
        res.writeHead(404, {'content-type': 'text/plain'})
        res.end('page not found')
    }

})

const port = 3000

server.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`)
})
  