require("dotenv").config();
const express = require("express");
const livroRoutes = require("./src/routes/livroRoutes");

const app = express();
app.use(express.json());

// Usando as rotas de livros
app.use("/livros", livroRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor Profissional rodando na porta ${PORT}`);
});
