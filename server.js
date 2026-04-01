require("dotenv").config();
const express = require("express");
const cors = require("cors"); // Subiu para o topo
const livroRoutes = require("./src/routes/livroRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/livros", livroRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Servidor Profissional rodando na porta ${PORT}`);
});
