const express = require('express')
const { rawListeners } = require('process')

const app = express()

app.use(express.urlencoded({extended: true}))

let tasks=[
    'sample task',
    'yo task'
]

app.get('/',(req,res)=>{
 res.send('
 <html>
 <body>
     <p>yo</p>
 </body>
 
 ')
})



app.get('/',(req,res)=>{
    //res.send('new task added = ' + req.body.NewTask)
    tasks.push(req.query)
    console.log(req.query.NewTask)
    res.redirect('/')
})


app.listen(5555,() => {
    console.log(
        'Started'
    )
})