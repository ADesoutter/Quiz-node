const express = require('express');
const router = express.Router();
const sequelize = require("../models");

// récupérer tous les questions
router.get('/', (req, res) => {
    sequelize.models.Question.findAll()
    .then(myQuestions => {
        res.send(myQuestions);
    })
})
   
// récupérer une question pour l'id
router.get('/:id', (req, res) => {
    const id= req.params.id;
    sequelize.models.Question.findByPk(id)
    .then(myQuestion => {
        res.send(myQuestion);
    })
})

module.exports = router;