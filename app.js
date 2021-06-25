const express = require('express');

const app = express();

// On récupère la librairie de sequelize
const {Datatypes, Sequelize} = require('sequelize');

const sequelize = new Sequelize(
    'mariadb://quizz_admin:root1234@localhost/Quizz'
)

const PORT = process.env.PORT || 5000;

// un Objet JS qui représente une table de la BDD
// const Category = sequelize.define('Category', {
//     name: {
//         type: Datatypes.STRING, //VARCHAR 255
//         allowNull: false      // NOT NULL
//     }
// })

console.log('Checking Database connection...');

sequelize.authenticate()
.then(() => {
    console.log("Database connection OK!");
    sequelize.sync({force:true})

    app.listen(PORT, () => {
        console.log(`Web server running at localhost:${PORT}`);
    });
})

.catch((err) => {
    console.log(err);
})