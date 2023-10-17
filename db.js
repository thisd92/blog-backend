const mongoose = require('mongoose');

require('dotenv').config()

mongoose.set('strictQuery', true)

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/blogdb', { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log('Conexão com MongoDB realizada com sucesso!');
        }).catch(() => {
            console.log('Erro: Conexão com MongoDB não foi realizada com sucesso!');
        })
}

main().catch(err => { console.log(err) })

module.export = main