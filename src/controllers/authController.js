const usuarioService = require("../services/usuarioService");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

async function login(req, res) {
  // Pegamos os dados e limpamos espaços extras
  const email = req.body.email ? req.body.email.trim() : "";
  const senha = req.body.senha ? req.body.senha.trim() : "";

  try {
    // 1. Busca o usuário pelo e-mail
    const usuario = await usuarioService.buscarUsuarioPorEmail(email);

    // 2. Se não existir, retorna erro genérico (boa prática de segurança)
    if (!usuario) {
      return res.status(401).json({ mensagem: "E-mail ou senha inválidos." });
    }

    // 3. Compara a senha enviada com o hash salvo no banco
    const senhaValida = await bcrypt.compare(senha, usuario.Senha.trim());

    if (!senhaValida) {
      return res.status(401).json({ mensagem: "E-mail ou senha inválidos." });
    }

    // 4. Se tudo estiver ok, gera o Token JWT
    const token = jwt.sign(
      { id: usuario.Id, email: usuario.Email },
      process.env.JWT_SECRET,
      { expiresIn: "2h" }, // Token expira em 2 horas
    );

    // 5. Retorna o sucesso e o token para o cliente (Postman/Frontend)
    res.json({
      auth: true,
      token: `Bearer ${token}`,
    });
  } catch (err) {
    console.error("Erro interno no processo de login:", err);
    res.status(500).json({ erro: "Erro ao realizar login no servidor." });
  }
}

module.exports = { login };
