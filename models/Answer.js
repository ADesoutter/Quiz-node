// DataTypes est à importer dans chaque fichier de modèle
const {DataTypes} = require('sequelize');

module.exports = (sequelize) => sequelize.define('Answer', {
    content: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    isCorrect: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    } 
 }, {
     tableName: 'answer',
     underscored: true,
     timestamp: false
 })