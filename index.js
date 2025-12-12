import express from 'express'
import router from './route.js'


const app = express()
const port = 3000


// ----------simple routes-----------
app.get('/', (req, res) => {
    res.send('this is home route')
})

app.use('/user',router)

app.listen(port, () => {
    console.log(`server in running on http://localhost:${port}`)
})