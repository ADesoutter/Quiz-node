const sequelize = require("./models");
const faker = require("faker");

console.log('Checking Database connection...');

function generateQuizzs() {
    for(let i=1; i<=10;i++) {
        sequelize.models.Quizz.create({
            title: faker.random.words(),
        })
    }
}

function generateQuestions() {
    for(let i=1; i<=10;i++) {
        sequelize.models.Question.create({
            title: faker.lorem.sentence(),
            body: faker.lorem.paragraphs(1)
        })
    }
}

function generateAnswers() {
    for(let i=1; i<=10;i++) {
        sequelize.models.Answer.create({
            isCorrect: faker.datatype.boolean(),
            body: faker.lorem.sentence(),
        })
    }
}

sequelize.authenticate()
// Si il arrive à s'authentifier à la BDD
.then(() => {
    console.log("Database connection OK!");

    // Synchroniser les modèles avec la BDD
    sequelize.sync({force: true})
    .then(()=> {
        generateQuizzs();
        generateQuestions();
        generateAnswers();

    });
})
// Si il n'arrive pas à se co à la BDD
.catch((err) => {
    console.log(err);
})