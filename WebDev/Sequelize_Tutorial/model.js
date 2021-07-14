const { Sequelize } = require('sequelize');
const DataTypes = Sequelize.DataTypes

const db = new Sequelize('sampledb1','sampleuser1','samplepass1',{
    host: 'localhost',
    dialect: 'mysql'
});

//Created a model Student
//Passed Table name and table columns
const Student = db.define("student",{
    name: {
        type: DataTypes.STRING(40),
        allowNull: false
    },
    age:{
        type: DataTypes.INTEGER(2),
        allowNull: false,
        defaultValue: -1
    },
});

module.exports = {
    db, Student
}

db.sync({alter: true})
    .then(()=>console.log('Database Synchronised'))
    .catch(console.error)