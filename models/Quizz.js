// DataTypes est à importer dans chaque fichier de modèle
const {DataTypes} = require('sequelize');

module.exports = (sequelize) => sequelize.define('Quizz', {
    title: {
        type: DataTypes.STRING(70),
        allowNull: false
    },
    image: {
        type: DataTypes.STRING(255),
        allowNull: true
    } 
 }, {
     tableName: 'quizz',
     underscored: true,
 })