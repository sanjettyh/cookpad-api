/* eslint-disable no-unused-vars */
const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Recipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Recipe.init({
    title: DataTypes.STRING,
    thumbnail: DataTypes.STRING,
    banner: DataTypes.STRING,
    description: DataTypes.TEXT,
    video: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Recipe',
  });
  return Recipe;
};
