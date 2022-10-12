const express = require('express')
const path = require('path')
const cors = require('cors')
const app = express()
require('dotenv').config()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//router
require('./routes/index')(app)

const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log('Server running on port '+ PORT))