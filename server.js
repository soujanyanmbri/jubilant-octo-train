//if (process.env.NODE_ENV !== 'production') {
  require('dotenv').load()
//}

const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const bodyParser = require('body-parser')

//imorting the mongooose db
import './db/mongoose'

const indexRouter = require('./routes/index')
const teachersRouter = require('./routes/teachers')
const answersheetsRouter = require('./routes/answersheets')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ limit: '10mb', extended: false }))



app.use('/', indexRouter)
app.use('/authors', teacherRouter)
app.use('/answersheetss', answersheetsRouter)

app.listen(process.env.PORT || 3000)