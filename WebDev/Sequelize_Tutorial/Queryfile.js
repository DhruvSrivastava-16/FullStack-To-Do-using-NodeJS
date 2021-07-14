const {db, Student} = require('./model')

const task = async() => {
    try{
        await db.sync()
        const students = await Student.findAll()
        students.forEach(s => console.log(
          `name: ${s.dataValues.name} \t\t age: ${s.dataValues.age}   `
        ))
        
        console.log(students)
    }catch(e){
        console.error(e)
    }
}