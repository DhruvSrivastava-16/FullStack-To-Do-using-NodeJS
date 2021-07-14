const express = require('express')

const app = express()

app.use(express.urlencoded({extended: true}))
app.set('view engine','hbs') //tells which templating libaray we are using

let tasks=[
    'sample task',
    'yo task'
]

app.get('/',(req,res)=>{
   // let tasklist = tasks.map(t => '<li>${t}</li>').join('\n')
   res.render('home',{Title: 'Todo List',tasks})
})


/*
app.get('/',(req,res)=>{
    res.send('new task added = ' + req.body.NewTask)
    tasks.push(req.query)
    console.log(req.query.NewTask)
    res.redirect('/')
})*/

app.post('/',(req,res)=>{
    tasks.push(req.body.NewTask)
    res.redirect('/')

})


app.listen(5555,() => {
    console.log(
        'Started'
    )
})