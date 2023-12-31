const express = require('express');
const cors = require('cors');
require('dotenv').config()
require('./db')

const port = process.env.PORT || 8090;

const app = express();

const userRouter = require('./routes/userRoutes')
const postsRouter = require('./routes/postsRoutes')
const characterRouter = require('./routes/characterRoutes')
const contactRouter = require('./routes/contactRoutes')

app.use(express.json());

app.use('/uploads', express.static('uploads'));

app.use(cors({
    origin: 'http://localhost:3000',
    methods: 'GET,PUT,POST,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
    credentials: true,
}));

app.use('/api', postsRouter)
app.use('/api', userRouter)
app.use('/api', characterRouter)
app.use('/api', contactRouter)

app.listen(port, () => {
    console.log(`Listening app on port ${port}`)
})