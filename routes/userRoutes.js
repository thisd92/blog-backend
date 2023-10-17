const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const User = require('../model/user');
const SECRET = process.env.JWT_SECRET;

const router = require('./routes');

router.use(cookieParser());

// Middleware de tratamento de erros
function errorHandler(err, req, res, next) {
    console.error(err.stack);
    res.status(500).json({ error: true, message: 'Erro no servidor' });
}

// Rota para criar um novo usuário
router.post('/user', async (req, res, next) => {
    try {
        // Validação de entrada
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                error: true,
                message: 'Campos de email e senha são obrigatórios.',
            });
        }

        const user = new User({ email, password });
        const hashedPassword = await bcrypt.hash(user.password, 10);
        user.password = hashedPassword;
        await user.save();
        res.status(201).json(user);
    } catch (err) {
        if (err.code === 11000) {
            return res.status(400).json({
                error: true,
                message: 'Email já utilizado.',
            });
        }
        next(err);
    }
});

router.get('/users', async (req, res, next) => {
    try {
        const user = await User.find()
        res.json(user);
    } catch (err) {
        next(err);
    }
});

module.exports = router;
