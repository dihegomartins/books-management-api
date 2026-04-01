# 📚 API de Gerenciamento de Biblioteca

🔗 Link da API Online: https://books-management-api-o9z2.onrender.com/

Esta é uma API RESTful desenvolvida para gerenciar um acervo de livros, conectada a um banco de dados **SQL Server hospedado na nuvem (Somee)**.

## 🚀 Tecnologias Utilizadas

- **Node.js** & **Express** (Back-end)
- **SQL Server** (Banco de Dados Relacional)
- **Somee** (Hospedagem de Banco de Dados em Nuvem)
- **Mssql** (Driver de conexão Node + SQL Server)
- **Dotenv** (Gerenciamento de variáveis de ambiente)

## 🛠️ Funcionalidades (CRUD)

A API permite as seguintes operações no endpoint `/livros`:

- `GET /livros`: Lista todos os 23 livros do acervo.
- `GET /livros/:id`: Busca um livro específico por ID (com tratamento de erro 404).
- `POST /livros`: Cadastra um novo livro.
- `PUT /livros/:id`: Atualiza os dados de um livro existente.
- `DELETE /livros/:id`: Remove um livro do banco de dados.

## ⚙️ Como rodar o projeto localmente

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/dihegomartins/books-management-api.git
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```
3. **Configure as Variáveis de Ambiente:**
   ```.env
   DB_USER=seu_usuario
   DB_PASSWORD=sua_senha
   DB_SERVER=seu_servidor.somee.com
   DB_DATABASE=seu_banco
   PORT=3000
   ```
4. **Inicie o servidor:**
   ```bash
   node server.js
   ```
