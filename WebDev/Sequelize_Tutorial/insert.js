const {db, Student} = require('./model')
const task = async () => {
    try {

            await db.sync()

            // Insert a student
            await Student.create({
                name: (['Tom','Dick','Harry','Ram','Shyam'])[parseInt(Math.random()*10)],
                age:10 +parseInt(Math.random()*10)
            })

    } catch(e){
        console.error(e)
    }
}

task();