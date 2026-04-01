const sql = require("mssql");
const config = require("../config/db");

async function buscarUsuarioPorEmail(email) {
  let pool = await sql.connect(config);
  let resultado = await pool
    .request()
    .input("email", sql.VarChar, email)
    .query("SELECT * FROM Usuarios WHERE Email = @email");
  return resultado.recordset[0];
}

module.exports = { buscarUsuarioPorEmail };
