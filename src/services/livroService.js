const sql = require("mssql");
const config = require("../config/db");

async function getTodosLivros() {
  let pool = await sql.connect(config);
  let resultado = await pool.request().query("SELECT * FROM Livros");
  return resultado.recordset;
}

async function getLivroPorId(id) {
  let pool = await sql.connect(config);
  let resultado = await pool
    .request()
    .input("id", sql.Int, id)
    .query("SELECT * FROM Livros WHERE Id = @id");
  return resultado.recordset[0]; // Retorna o primeiro (e único) item ou undefined
}

// Não esqueça de exportar!

async function criarLivro(livro) {
  let pool = await sql.connect(config);
  let resultado = await pool
    .request()
    .input("titulo", sql.VarChar, livro.Titulo)
    .input("autor", sql.VarChar, livro.Autor)
    .input("ano", sql.Int, livro.AnoPublicacao)
    .query(
      "INSERT INTO Livros (Titulo, Autor, AnoPublicacao) VALUES (@titulo, @autor, @ano)",
    );
  return resultado;
}

async function atualizarLivro(id, dadosNovos) {
  let pool = await sql.connect(config);
  await pool
    .request()
    .input("id", sql.Int, id)
    .input("titulo", sql.VarChar, dadosNovos.Titulo)
    .input("autor", sql.VarChar, dadosNovos.Autor)
    .input("ano", sql.Int, dadosNovos.AnoPublicacao)
    .query(
      "UPDATE Livros SET Titulo = @titulo, Autor = @autor, AnoPublicacao = @ano WHERE Id = @id",
    );
}

async function deletarLivro(id) {
  let pool = await sql.connect(config);
  let resultado = await pool
    .request()
    .input("id", sql.Int, id)
    .query("DELETE FROM Livros WHERE Id = @id");

  return resultado.rowsAffected[0];
}

module.exports = {
  getTodosLivros,
  criarLivro,
  atualizarLivro,
  deletarLivro,
  getLivroPorId,
};
