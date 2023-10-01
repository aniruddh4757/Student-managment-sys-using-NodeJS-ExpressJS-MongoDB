import express from 'express'
import connectdb from './db/connecter.js'
import web from './routes/web.js'
import path from 'path'
import bodyParser from 'body-parser'


const app = express()
const port = process.env.port || '3000'
app.set('view engine', 'ejs')
// app.use(express.static('public'))
app.use(express.static(path.join(process.cwd(), 'public')))
app.use(express.urlencoded({extended:true}))
app.use(bodyParser.urlencoded({ extended: true }));



connectdb()

app.use('/', web)

app.listen(port, ()=>{
    console.log(`server listning at http://localhost:${port}`)
})