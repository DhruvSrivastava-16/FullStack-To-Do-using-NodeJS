const mysql = require('mysql2')

const insert = {
    name: process.argv[2],
    age: parseInt(process.argv[3]),
    city: process.argv[4]
} 

const connection = mysql.createConnection({
    host: 'localhost',
    database: 'mytestdb',
    user: 'root',
    password: '91273612300129'
})

connection.query(
    `Insert into persons(name,age,city) values (
        '${insert.name}',
        ${insert.age},
        '${insert.city}'
    )`,
    function(err,results){

        if(err)
        {
            console.error(err)
        }
        else{
            console.log("Inserted Successfully!")
        }
        connection.close();
    }
)