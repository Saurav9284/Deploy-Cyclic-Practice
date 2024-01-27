const express = require('express')
require('dotenv').config()

const PORT = process.env.PORT
const app = express()

app.get('/',(req,res)=>{
    res.send({msg:'API running'})
})

app.get('/deploy',(req,res)=>{
    res.send({msg:'Its deployed'})
})

app.listen(PORT,()=>{
    console.log(`listening on ${PORT}`)
})