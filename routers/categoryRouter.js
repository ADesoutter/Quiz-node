const express = require('express');
const router = express.Router();
const sequelize = require("../models");

// récupérer tous les catégories
router.get('/', (req, res) => {
    sequelize.models.Category.findAll()
    .then(myCategories => {
        res.send(myCategories);
    })
})
// récupérer une catégorie pour l'id
router.get('/:id', (req, res) => {
    const id= req.params.id;
    sequelize.models.Category.findByPk(id)
    .then(myCategory => {
        res.send(myCategory);
    })
})

module.exports = router;