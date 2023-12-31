const Character = require('../model/character')
const Image = require('../model/image')

exports.create = async (req, res, next) => {
    try {
        const { name } = req.body
        const file = req.file
        const char = new Character(req.body)
        if (file) {
            const image = new Image({
                name,
                src: file.path
            })
            const savedImage = await image.save();
            char.images.push(savedImage.src)
            console.log(char)
            await char.save()
            res.status(201).json({
                msg: "Personagem adicionado"
            })
        }
    } catch (error) {
        next(error)
    }
}

exports.findAll = async (req, res, next) => {
    try {
        const characters = await Character.find()
        res.status(200).json(characters)
    } catch (error) {
        next(error)
    }
}

exports.findById = async (req, res, next) => {
    try {
        const { params: { id } } = req
        const characters = await Character.findById(id)
        if (!characters) {
            res.status(404).json({
                error: true,
                message: "Personagem não encontrado"
            })
        }
        res.json(characters);
    } catch (err) {
        next(err);
    }
}

exports.deleteById = async (req, res, next) => {
    try {
        const { params: { id } } = req
        await Character.findByIdAndDelete(id)
        res.json({ msg: "Personagem deletado" })
    } catch (error) {
        next(error)
    }
}