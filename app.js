const { dir } = require('console')
const fs = require('fs')
const http = require('http')
const path = require('path')
const os = require('os')
const url = require('url')
const crypto = require('crypto')
const EventEmitter = require('events');


/*fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    console.log(data)
})
const content = 'hello, world and node'
fs.writeFile('output.txt', content, (err) => {
    if (err) {
        console.error(err)
        return
    }
    console.log('file written successfully')
})

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('content-type', 'text/plain')
    res.end('hello, worldkmkmkmdvjnjvnjfvfjnvjjnfj njfvnjfnjnfjvnnvdkkkkkkkkkkkkkkkkkkkkkk')
})

server.listen(3000, 'localhost', () => {
    console.log('server running at http://localhost:3000/')
})

const directory = '/user/localkkvfkkffkbfkkvmfkvm'
const filename = 'example.txtkmvkfmvkmfkvm'

const fullpath = path.join(directory, filename)
console.log(fullpath)

console.log('platform:', os.platform())
console.log('platform:', os.arch())
console.log('totalmemory:', os.totalmem())
console.log('platform:', os.freemem())

const myurl = new URL ('http://www.example.com:8080/path/name?search=test#hashvalue')

console.log('host', myurl.host)
console.log('parameter', myurl.searchParams.get('test'))
console.log('pathname', myurl.pathname)

const hash = crypto.createHash('sha256')
hash.update('Hello, World')

console.log(hash.digest('hex'))

const emitter = new EventEmitter();

emitter.on('greet', () => console.log("Hello!"));
emitter.emit('greet');
const buf = Buffer.from('Abdu', 'utf-8');
console.log(buf);*/


const readStream = fs.createReadStream('example.txt');
readStream.pipe(process.stdout);


