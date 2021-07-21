const express = require('express');

const dotenv = require('dotenv');

const app = express();
const sequelize = require('./models');
const PORT = process.env.PORT || 5000;

// Je suis en local
if(!process.env.NODE_ENV)
{
    // CHaque variable dans le .env en local devient
    // une variable process.env.LENOMDEMAVAR
    dotenv.config(); 
}
const sequelize = new Sequelize(process.env.DATABASE_URL);

// Configurer notre serveur pour utiliser ces routeurs
const quizzRouter = require('./routers/quizzRouter');
app.use('/quizz', quizzRouter);

// Je veux accepter du JSON en envoi d'informations
app.use(express.json());


console.log('Checking Database connection...');

sequelize.authenticate()
.then(() => {
    console.log("Database connection OK!");
    // Synchronise la base de données avec nos modèles
    sequelize.sync({force:true})

    app.listen(PORT, () => {
        console.log(`Web server running at localhost:${PORT}`);
    });
})

.catch((err) => {
    console.log(err);
})