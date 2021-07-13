const express = require('express');
const router = express.Router();
const sequelize = require("../models");

// récupérer tous les Quizzs
router.get('/', (req, res) => {
    sequelize.models.Quizz.findAll()
    .then(myQuizzs => {
        res.send(myQuizzs);
    })
})
   
// récupérer un Quizz pour l'id
router.get('/:id', (req, res) => {
    const id= req.params.id;
    sequelize.models.Quizz.findByPk(id)
    .then(myQuizz => {
        res.send(myQuizz);
    })
})

module.exports = router;