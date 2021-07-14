const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    database: 'mytestdb',
    user: 'root',
    password: '91273612300129'
})

connection.query(
    `CREATE TABLE IF NOT EXISTS persons (
        id Integer auto_increment primary key, name varchar(50), age Integer not null, city varchar(30)
    )`,
    function(err,results){

        if(err)
        {
            console.error(err)
        }
        else{
            console.log("Table Created Successfully!")
        }
        connection.close();
    }
)