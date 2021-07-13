const express = require('express');
const router = express.Router();
const sequelize = require("../models");

// récupérer tous les catégories
router.get('/', (req, res) => {
    sequelize.models.Answer.findAll()
    .then(myAnswers => {
        res.send(myAnswers);
    })
})
   
// récupérer une catégorie pour l'id
router.get('/:id', (req, res) => {
    const id= req.params.id;
    sequelize.models.Answer.findByPk(id)
    .then(myAnswer => {
        res.send(myAnswer);
    })
})

module.exports = router;