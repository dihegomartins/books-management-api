const jwt = require("jsonwebtoken");

function verificarToken(req, res, next) {
  const token = req.headers["authorization"];

  if (!token) {
    return res
      .status(401)
      .json({ mensagem: "Acesso negado. Token não fornecido." });
  }

  try {
    // O token geralmente vem como "Bearer TOKEN", vamos pegar só o TOKEN
    const apenasToken = token.split(" ")[1];
    const verificado = jwt.verify(apenasToken, process.env.JWT_SECRET);
    req.usuario = verificado;
    next(); // Pode passar, o crachá é verdadeiro!
  } catch (err) {
    res.status(400).json({ mensagem: "Token inválido." });
  }
}

module.exports = verificarToken;
