const express = require("express");
const router = express.Router();
const livroController = require("../controllers/livroController");

router.get("/", livroController.listar);
router.post("/", livroController.criar);
router.put("/:id", livroController.atualizar);
router.delete("/:id", livroController.excluir);
router.get("/:id", livroController.buscarPorId);

module.exports = router;
