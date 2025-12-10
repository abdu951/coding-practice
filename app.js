const { dir, error } = require('console')
const fs = require('fs')
const http = require('http')
const path = require('path')
const os = require('os')
const url = require('url')
const crypto = require('crypto')
const EventEmitter = require('events');
const sayHello = require('./greeting')
const math = require('./math')
const { finished } = require('stream')
const { startupSnapshot } = require('v8')


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
console.log(buf);


const readStream = fs.createReadStream('example.txt');
readStream.pipe(process.stdout);

const message = sayHello('abdbbbbbbbbbbb')
console.log(message)

console.log(math.add(5,8))
console.log(math.subtract(10,4))

const readeblestream = fs.createReadStream('example.txt', {encoding: 'utf8', })
readeblestream.on('data', (chunk) => {
    console.log(chunk)
})
readeblestream.on('end', () => {
    console.error('finished reading')
})
readeblestream.on(error, (err) => {
    console.error('error', err)
})

const writablestream = fs.createWriteStream('output.txt2')
writablestream.write('hello ')
writablestream.write('world!')
writablestream.end()

writablestream.on('finish', () => {
    console.log('finished writing')
})

const readline = require('readline')
const readeblestream = fs.createReadStream('example.txt')
const rl = readline.createInterface({input: readeblestream})

rl.on('line', (line) => {
    console.log('line:', line)
})
rl.on('close', () => {
    console.log('file transfer completed')
})
const readeblestream = fs.createReadStream('example.txt')
const writablestream = fs.createWriteStream('output.txt3')

readeblestream.pipe(writablestream)

writablestream.on('finish', () => {
    console.log('file copied successfully')
})

fs.mkdir('newDirectory', (err) => {
    if(err) {
        console.error('error in creating directory:', err)
    }
    console.log('created directory successfuly')
})

fs.mkdirSync('new directory2')
 console.log('created directory successfuly')

 fs.readdir('./', (err, file) => {
    if (err) {
    console.error('errorrrrrrrr:', err)
}
console.log('directory content', file)
 })
const files = fs.readdirSync('./')
console.log('directory content', files)

const dirname = 'newdirectory3'

if (fs.existsSync(dirname)) {
    console.log('directory exist')
}else {
console.log('directory does not exist')
}

fs.rmdir('new directory2', (err) => {
    if (err) {
        return console.err('error in directory removing process:', err)
    }
    console.log('remove directory successfuly')
})

fs.rename('newDirectory', 'addis', (err) => {
    if (err) {
        console.error('error meta:', err)
    }
    console.log('renamed')
})

fs.stat('./', (err, stats) => {
    if (err) {
        console.log('error meta:', err)
    }
    console.log('directory stats:', stats)
})
*/
fs.watch('./', (eventType, fileName) => {
    console.log(`Event: ${eventType}`)
    if (fileName) {
        console.log(`filname: ${fileName}`)
    }
})

