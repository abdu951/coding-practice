import express from 'express'
import router from './route.js'


const app = express()
const port = 3000

//app.use('/user',router)

app.use(express.json())


// ----------simple routes-----------
app.get('/', (req, res) => {
    res.send('this is home route')
})

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


app.listen(port, () => {
    console.log(`server in running on http://localhost:${port}`)
})