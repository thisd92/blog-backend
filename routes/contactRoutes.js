const router = require('./routes');

const ContactController = require('../controller/contactController')

// Rota para criar um novo post
router.post('/contact', ContactController.create);

// Rota para buscar contact
router.get('/contact', ContactController.findAll);

// Rota para buscar contact
router.get('/contact/:id', ContactController.findById);

// Rota para deletar post
router.delete('/contact/:id', ContactController.deleteById);

module.exports = router