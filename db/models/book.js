'use strict';
module.exports = (sequelize, DataTypes) => {
  var Book = sequelize.define('Book', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    isbn: DataTypes.STRING,
    publishedOn: DataTypes.STRING,
    numberOfPages:DataTypes.STRING
  }, {});
  return Book;
};