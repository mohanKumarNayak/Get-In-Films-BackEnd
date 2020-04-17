const express = require('express')
const app = express()
const setUpDb = require('./config/database')
const route = require('./config/routes')
const port = 3030
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use('/',route)

setUpDb()

app.listen(port,()=>{
    console.log('listening on port ',port)
})



