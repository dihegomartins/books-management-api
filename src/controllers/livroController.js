const livroService = require("../services/livroService");

async function listar(req, res) {
  try {
    const livros = await livroService.getTodosLivros();
    res.json(livros);
  } catch (err) {
    res.status(500).send("Erro ao obter dados.");
  }
}

async function buscarPorId(req, res) {
  try {
    const { id } = req.params;
    const livro = await livroService.getLivroPorId(id);

    if (!livro) {
      return res.status(404).json({ mensagem: "Livro não encontrado." });
    }

    res.json(livro);
  } catch (err) {
    res.status(500).json({ erro: "Erro ao buscar o livro." });
  }
}

async function criar(req, res) {
  try {
    const novoLivro = req.body; // Pega os dados enviados pelo cliente
    await livroService.criarLivro(novoLivro);
    res.status(201).json({ mensagem: "Livro criado com sucesso!" });
  } catch (err) {
    res.status(500).json({ erro: "Erro ao cadastrar livro." });
  }
}

async function atualizar(req, res) {
  try {
    const { id } = req.params; // Pega o ID da URL
    const dadosNovos = req.body; // Pega os novos dados do Body
    await livroService.atualizarLivro(id, dadosNovos);
    res.json({ mensagem: "Livro atualizado com sucesso!" });
  } catch (err) {
    res.status(500).json({ erro: "Erro ao atualizar livro." });
  }
}

async function excluir(req, res) {
  try {
    const { id } = req.params;
    const linhasAfetadas = await livroService.deletarLivro(id);

    if (linhasAfetadas === 0) {
      return res
        .status(404)
        .json({ mensagem: "Livro não encontrado para exclusão." });
    }

    res.json({ mensagem: "Livro excluído com sucesso!" });
  } catch (err) {
    res.status(500).json({ erro: "Erro ao excluir livro." });
  }
}

module.exports = { listar, criar, atualizar, excluir, buscarPorId };
