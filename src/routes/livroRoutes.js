const express = require("express");
const router = express.Router();
const livroController = require("../controllers/livroController");

const auth = require("../middlewares/authMiddleware");

// Rotas livres
router.get("/", livroController.listar);
router.get("/:id", livroController.buscarPorId);

// Rotas TRANCADAS (adicionamos o 'auth' antes do controller)
router.post("/", auth, livroController.criar);
router.put("/:id", auth, livroController.atualizar);
router.delete("/:id", auth, livroController.excluir);

module.exports = router;
