var mongoose = require('mongoose')
var express = require('express')
var route = require('./routes')
var bodyParser =require('body-parser')


mongoose.connect('mongodb+srv://sheetal:88798879@Cluster0.ktyb0.mongodb.net/brand?retryWrites=true&w=majority').then(()=>{
console.log('DB Connected....')

app = express();
    app.use(bodyParser.urlencoded({extended:false}))
    app.use('/api',route)
    
    app.get('/', (req,res)=>{
        res.sendFile('index.html',{root:__dirname})
    })

    app.listen((process.env.PORT||3000),()=>{
        console.log('server started')
    })
}).catch((e)=>{
    console.log(e.toString())
})