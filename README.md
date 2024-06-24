# Blog Backend

Este repositório contém o código-fonte de um backend em Node.js/Express para um blog, utilizando MongoDB com Mongoose para persistência de dados e Multer para upload de imagens.

**Este projeto ainda está em desenvolvimento.**

## Tecnologias Utilizadas

- **Node.js**: Plataforma de desenvolvimento para construção do servidor backend em JavaScript.
- **Express**: Framework web para Node.js que facilita a criação de APIs RESTful.
- **MongoDB**: Banco de dados NoSQL utilizado para armazenamento de dados.
- **Mongoose**: ODM (Object Data Modeling) para MongoDB em Node.js, utilizado para modelagem de dados.
- **Multer**: Middleware Node.js para manipulação de multipart/form-data, usado para upload de arquivos, como imagens.

## Configuração do Ambiente

### Pré-requisitos

- Node.js instalado
- MongoDB instalado e em execução
- npm ou Yarn

### Instalação de Dependências

1. Clone o repositório para sua máquina local:
    ```bash
   git clone https://github.com/seu-usuario/blog-backend.git
   cd blog-backend
    ```
2. Instale as dependências do projeto:
```
npm install
```

## Configuração do Banco de Dados

A conexão com o banco de dados MongoDB é configurada no arquivo `db.js`. Abaixo está o conteúdo atualizado do arquivo `db.js`:

```javascript
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.set('strictQuery', true);

async function main() {
    await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log('Conexão com MongoDB realizada com sucesso!');
        }).catch(() => {
            console.log('Erro: Conexão com MongoDB não foi realizada com sucesso!');
        });
}

main().catch(err => { console.log(err) });

module.exports = main;
```
Certifique-se de definir a variável de ambiente MONGODB_URI no arquivo .env com o URI de conexão do seu banco de dados MongoDB.

## Instalação de Dependências e Execução do Projeto
Para instalar as dependências do projeto e iniciar o servidor de desenvolvimento:
1. Clone o repositório para sua máquina local:
```
git clone https://github.com/thisd92/blog-backend.git
cd blog-backend
```
2. Instale as dependências do projeto:
```
npm install
```
3. Crie um arquivo .env na raiz do projeto com as seguintes variáveis:
```
MONGODB_URI=sua_uri_mongodb
PORT=8090
```
Substitua sua_uri_mongodb pelo URI de conexão do seu banco de dados MongoDB.
Inicie o servidor de desenvolvimento:
```
npm start
```
O servidor estará disponível em http://localhost:8090.

## Funcionalidades
O backend possui rotas configuradas para as entidades principais de um blog:

- Posts: CRUD para gerenciar os posts do blog.
- Usuários: CRUD para gerenciar os usuários do sistema.
- Personagens: CRUD para gerenciar os personagens do blog.
- Contatos: CRUD para gerenciar os contatos recebidos através do blog.
As rotas estão definidas nos respectivos arquivos de rota e cada entidade possui seu próprio controlador para a lógica de negócios.

## Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para fazer um fork deste repositório, criar uma branch com suas alterações e enviar um pull request.

## Licença
Este projeto está licenciado sob a licença MIT. Consulte o arquivo LICENSE para mais detalhes.

Para qualquer dúvida ou sugestão, abra uma issue neste repositório. Obrigado!
