const router = require('./routes');

const upload = require('../config/multer')

const PostController = require('../controller/postController')

// Rota para criar um novo post
router.post('/posts', upload.single('file'), PostController.create);

// Rota para buscar posts
router.get('/posts', PostController.findAll);

// Rota para buscar posts
router.get('/posts/:id', PostController.findById);

// Rota para deletar post
router.delete('/posts/:id', PostController.deleteById);

module.exports = router