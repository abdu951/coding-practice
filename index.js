import express from 'express'
import router from './route.js'


const app = express()
const port = 3000

//app.use('/user',router)

app.use(express.json())


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
app.use('/images', express.static('images'))*/
// ----------simple routes-----------
app.get('/', (req, res) => {
    res.send('this is home page')
})

app.listen(port, () => {
    console.log(`server in running on http://localhost:${port}`)
})