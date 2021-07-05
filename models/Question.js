// DataTypes est à importer dans chaque fichier de modèle
const {DataTypes} = require('sequelize');

module.exports = (sequelize) => sequelize.define('Question', {
    statement: {
        type: DataTypes.STRING(200),
        allowNull: false
    }
 }, {
     tableName: 'question',
     underscored: true,
     timestamp: false
 })