const {Sequelize} = require('sequelize');

const sequelize = new Sequelize(
    'mariadb://quizz_admin:root1234@localhost/Quizz'
)

const Category = require('./Category')(sequelize);
const Question = require('./Question')(sequelize);
const Quizz = require('./Quizz')(sequelize);
const Answer = require('./Answer')(sequelize);

//-------------- Relations start---------------//

Category.hasMany(Quizz);
Quizz.belongsTo(Category);

Quizz.hasMany(Question);
Question.belongsTo(Quizz);

Question.hasMany(Answer);
Answer.belongsTo(Question);

//-------------- Relations end---------------//

module.exports = sequelize;
