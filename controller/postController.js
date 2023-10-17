const Post = require('../model/post')
const Image = require('../model/image')

exports.create = async (req, res, next) => {
    try {
        const { name } = req.body
        const file = req.file
        const post = new Post(req.body)
        if (file) {
            const image = new Image({
                name,
                src: file.path
            })
            const savedImage = await image.save();
            post.images.push(savedImage.src)
            console.log(post)
            await post.save()
            res.status(201).json({
                msg: "Post criado"
            })
        }
    } catch (error) {
        next(error)
    }
}

exports.findAll = async (req, res, next) => {
    try {
        const posts = await Post.find()
        res.status(200).json(posts)
    } catch (error) {
        next(error)
    }
}

exports.findById = async (req, res, next) => {
    try {
        const { params: { id } } = req
        const posts = await Posts.findById(id)
        if (!posts) {
            res.status(404).json({
                error: true,
                message: "Post não encontrado"
            })
        }
        res.json(posts);
    } catch (err) {
        next(err);
    }
}

exports.deleteById = async (req, res, next) => {
    try {
        const { params: { id } } = req
        await Post.findByIdAndDelete(id)
        res.json({ msg: "Post deletado" })
    } catch (error) {
        next(error)
    }
}