const bookController = require('../controllers').books

module.exports = (app) => {
  app.post('/api/books', bookController.create);
  app.get('/api/books', bookController.list);
  app.get('/api/books/:bookId', bookController.getBookDetails);
  app.put('/api/books/:bookId', bookController.update);
  app.delete('/api/books/:bookId', bookController.destroy);
}