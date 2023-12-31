const Contact = require('../model/contact')

exports.create = async (req, res, next) => {
    try {
        const contact = new Contact(req.body)
        console.log(contact)
        await contact.save()
        res.status(201).json({
            msg: "Contato enviado"
        })
    } catch (error) {
        next(error)
    }
}

exports.findAll = async (req, res, next) => {
    try {
        const contacts = await Contact.find()
        res.status(200).json(contacts)
    } catch (error) {
        next(error)
    }
}

exports.findById = async (req, res, next) => {
    try {
        const { params: { id } } = req
        const contacts = await Contact.findById(id)
        if (!contacts) {
            res.status(404).json({
                error: true,
                message: "Contato não encontrado"
            })
        }
        res.json(contacts);
    } catch (err) {
        next(err);
    }
}

exports.deleteById = async (req, res, next) => {
    try {
        const { params: { id } } = req
        await Contact.findByIdAndDelete(id)
        res.json({ msg: "Contato deletado" })
    } catch (error) {
        next(error)
    }
}