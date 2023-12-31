const router = require('./routes');

const upload = require('../config/multer')

const CharacterController = require('../controller/characterController')

// Rota para criar um novo post
router.post('/character', upload.single('file'), CharacterController.create);

// Rota para buscar character
router.get('/character', CharacterController.findAll);

// Rota para buscar character
router.get('/character/:id', CharacterController.findById);

// Rota para deletar post
router.delete('/character/:id', CharacterController.deleteById);

module.exports = router