const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000


const test = require('./data/test.json')

app.use(cors())

app.get('/', (req,res) => {
    res.send("server is coming")
})

app.get('/test',(req,res)=> {
    res.send(test)
})

app.listen(port , () => {
    console.log(`server is running on port ${port}` );
})