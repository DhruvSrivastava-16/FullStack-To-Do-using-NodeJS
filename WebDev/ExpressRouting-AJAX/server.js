const express = require('express')
const srv = express();
const todoRoute = require('./routes/todos')


srv.use(express.json())                                                 //to handle POST requests
srv.use(express.urlencoded({extended:true}))                            //we enable these

srv.get('/hello',function (req,res){
    console.log(
        "started...."
    )
    res.send("Hello")
})

srv.use('/public',express.static(__dirname + "/public")) //with this we can make the entire public folder statically availablesrv.use('/todos',todoRoute)
srv.use('/todos', todoRoute)
 
srv.listen(4567)