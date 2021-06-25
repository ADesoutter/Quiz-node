// DataTypes est à importer dans chaque fichier de modèle
const {DataTypes} = require('sequelize');

module.exports = (sequelize) => sequelize.define('Category', {
    name: {
        type: DataTypes.STRING(190),
        allowNull: false
    } 
 }, {
     tableName: 'category',
     underscored: true
 })