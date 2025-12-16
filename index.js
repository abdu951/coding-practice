import express from 'express'
import router from './route.js'
import multer from 'multer'
import { store } from './config/multer.js'
import { connectDb } from './config/db.js'
import { person } from './model/person.js'
import cookieParser from 'cookie-parser'
import session from 'express-session'


const app = express()
const port = 3000

await connectDb()

app.use(express.json())
app.use(cookieParser())
app.use(session({
    secret: 'sample secret',
    resave: false,
    saveUninitialized: false
}))


//app.use('/user',router)

//app.use(express.json())


// note: normal middleware site always before routes or at the top--------------
/*app.use('/about', (req, res, next) => {
    console.log('start at: '+Date.now())

    res.on('finish', () => {
        console.log('end at: '+Date.now())
    })
    next()
})

app.get('/about', (req, res) => {
    console.log('middle at: '+Date.now() )
    res.send('this is about page')
})
-----------------http methods routes ----------------
app.post('/users', (req, res) => {
    const { name, email } = req.body
    res.json({
        message: `user ${name} with email ${email} is created successfully`
    })
})

app.put('/users/:id', (req, res) => {
    const userid = req.params.id
    const { name, email } = req.body
    res.json({
        message: `user ${userid} updated ${name} and ${email} successfully`
    })
})

app.delete('/users/:id', (req, res) => {
    const userid = req.params.id
    res.json({
        message: `user ${userid} deleted successfully`
    })
})

------------- question multiple parameters routes (i check it in version 4 express)(([1,9]{4}), (*)) --------------
app.get('/things/:name/:id', (req, res) => {
    const { name, id } = req.params
    res.json({ name, id })
})

app.use((req, res) => {
    res.status(404).send('sorry something went wrong');
});

app.get('/error',() => {
    throw new Error('something went wrong')
})

// note: error middleware site always after routes or at the bottom--------------
app.use((err, req, res, next) => {
    console.error(err.message)
    res.send('this is an inernal server error')

-----------------templete engine routes----------------
 app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    const username = 'seya'
    res.render('index', {username})
})
})

---------------how to serve static files routes in express------------
app.use('/public', express.static('public'))
app.use('/images', express.static('images'))

//-----pass urlencoded & normal form data and also uploading & storing file by using multer routes------------
const upload = multer({
    storage: store,
    limits: {
        fileSize: 3024000
    }
})  

app.use(express.urlencoded({extended: true}))
app.use(upload.single('image'))

app.post('/form', (req, res) => {
    console.log(req.body)
    console.log(req.file)
    res.send('form received successfully')
})

// ----------in this routes: creating data in database by using post method-----------

app.post('/person', async(req, res) => {
    try {
        const {name, age, email} = req.body
        const newperson = new person ({
            name,
            age,
            email
        })
        await newperson.save()
        console.log(newperson)
        res.send('this person is valid')
    } catch (error) {
        res.send(error.message)
    }
})

// ----------in this routes: updating data in database by using put method-----------

app.put('/person', async(req, res) => {
    const { id } = req.body
    const persondata = await person.findByIdAndUpdate(id, {age: 900}, {new: true})
    
    console.log(persondata)
    res.send('person updated successfully')
})

// ----------in this routes: deleting data in database by using delete method-----------

app.delete('/person/:id', async(req, res) => {
    const { id } = req.params
    await person.findByIdAndDelete(id)
    res.send('person deleted successfully')
})

// ----------this is all about cookies by using routes-----------
// ----------simple routes-----------
app.get('/', (req, res) => {
    res.cookie('bro', 'seya')
    res.send('this is home page')
})

// SO this is a middleware to check all: app.use(cookieParser())
// ----------this is about how to get cookies by using routes-----------
app.get('/fetch', (req, res) => {
    console.log(req.cookies)
    res.send('this is fetch page')
})
// ----------this is about how to remove cookies by using routes-----------
app.get('/remove-cookie', (req, res) => {
    res.clearCookie('bro')
    res.send('cookie removed successfully')
})*/

// ----------simple routes-----------
app.get('/', (req, res) => {
    res.send('this is home page')
})

app.get('/visit', (req, res) => {
    if (req.session.page_views) {
        req.session.page_views++
        res.send(`you visited this page ${req.session.page_views} times`)
    } else {
        req.session.page_views = 1
        res.send('welcome to this page for the first time')
    }
})

app.get('/remove-visit', (req, res) => {
    req.session.destroy()
    res.send('session removed successfully')
})

app.listen(port, () => {
    console.log(`server in running on http://localhost:${port}`)
})