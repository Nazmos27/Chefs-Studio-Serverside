const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000


const test = require('./data/test.json')
const chefs_data = require('./data/chefs_data.json')
const recipe_details = require('./data/recipe_details.json')

app.use(cors())

app.get('/', (req,res) => {
    res.send("server is coming")
})

app.get('/test',(req,res)=> {
    res.send(test)
})

app.get('/chefs_data', (req,res) => {
    res.send(chefs_data)
})
app.get('/chefs_data/:id', (req,res) => {
    const id = req.params.id;
    const cdata = chefs_data.find(element=> element.id == id );
    res.send(cdata)

})
app.get('/recipe_details' , (req,res) => {
    res.send(recipe_details)
})

app.get('/recipe_details/:id',(req,res) => {
    const id = req.params.id;
    res.send(recipe_details.find(item => item.id == id))//if i use filter here,it returns an array which in incovenient to fetch and load,so have to use find,find return that element match the condition
    
})

app.listen(port , () => {
    console.log(`server is running on port ${port}` );
})