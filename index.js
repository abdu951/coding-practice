import express from 'express'
import router from './route.js'
import multer from 'multer'
import { store } from './config/multer.js'
import { connectDb } from './config/db.js'
import { person } from './model/person.js'
import cookieParser from 'cookie-parser'
import session from 'express-session'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'


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
})

// ----------this is about session by using routes-----------
app.get('/visit', (req, res) => {
    if (req.session.page_views) {
        req.session.page_views++
        res.send(`you visited this page ${req.session.page_views} times`)
    } else {
        req.session.page_views = 1
        res.send('welcome to this page for the first time')
    }
})

// ----------this is about how to remove session by using routes-----------
app.get('/remove-visit', (req, res) => {
    req.session.destroy()
    res.send('session removed successfully')
})


// ----------: this is about registration(sign up) by using session method in routes-----------
app.post('/register', async(req, res) => {
    const { username, password} = req.body 
    users.push({username, password})
    res.send('user registered successfully')
})

// ----------this is about authentication(log in) by using session method in routes-----------
app.post('/login', async(req, res) => {
    const { username, password} = req.body  
    const user = users.find(u => u.username === username)
    
    if (!user || password !== user.password) {
        return res.send('not autorized')
    }
    req.session.user = user
    res.send('user logged in successfully')
})

// ----------this is about access permission(admin dashbord) by using session method in routes-----------
app.get('/dashboard', (req,res) => {
    if (!req.session.user) {
        return res.send('unoutorized')
    }
    res.send(`welcom ,${req.session.user.username}`)
})

// ----------this is using as like a fake database-----------
const users = []

// ----------this is about registration(sign up) by using jwt method in routes-----------
app.post('/register', async(req, res) => {
    const { username, password} = req.body 
    const hashedpassword = await bcrypt.hash(password, 10)
    users.push({username, password: hashedpassword})
    res.send('user registered successfully')
})

// ----------this is about authentication(log in) by using jwt method in routes-----------
app.post('/login', async(req, res) => {
    const { username, password} = req.body  
    const user = users.find(u => u.username === username)
    
    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.send('not autorized')
    }
    const token = jwt.sign({username}, 'test#secret')
    res.send({token})
})

// ----------this is about access permission(admin dashbord) by using jwt method in routes-----------
app.get('/dashboard', (req,res) => {
    try{
       const token = req.header('authorization')
       const decodedtoken = jwt.verify(token, 'test#secret')
    if (decodedtoken.username) {
        res.send(`welcom ,${decodedtoken.username}`)
    }
    res.send('access denied')
    }
    catch (error) {
        res.send('access denied')
    }
    
})

//----------get all products & using status code routes-----------
app.get('/api/products', (req, res) => {
    const products = [
        {id: 1, name: "laptop", price: 1000},
        {id: 2, name: "mobile", price: 2000},
        {id: 3, name: "tablet", price: 3000},
    ]

    res.status(200).json({products})
})

//----------get single product & using status code routes-----------
app.get('/api/products/:id', (req, res) => {
    const products = [
        {id: 1, name: "laptop", price: 1000},
        {id: 2, name: "mobile", price: 2000},
        {id: 3, name: "tablet", price: 3000},
    ]

    const product = products.find(p=> p.id === Number(req.params.id))

    if (!product) {
        return res.status(404).json({message: "product not found"})
    }
    
    res.status(200).json(product)
})

//----------create product & using status code routes-----------
app.post('/api/products', (req, res) => {
    const newproduct = req.body
    newproduct.id = Date.now()
    res.status(201).json(newproduct)
})*/

// ----------simple routes-----------
app.get('/', (req, res) => {
    res.send('this is home page')
})

app.get('/sync-error', (req, res, next) => {
    try {
        throw new Error('something went wrong')
    } catch (error) {
        next(error)
    }
})

app.get('/async-error', async(req, res, next) => {
    try {
        await Promise.reject(new Error('async error occured'))
    } catch (error) {
        next(error)
    }
})



app.listen(port, () => {
    console.log(`server in running on http://localhost:${port}`)
})