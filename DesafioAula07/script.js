function autenticarUsuario(nomeUsuario, senha) {
    const usuarioCorreto = "luan oliveira gameplays"
    const senhaCorreta = "senha123";

    if (nomeUsuario === usuarioCorreto && senha === senhaCorreta) {
      return true
    } else {
      return false
    }
  }
  
  document.getElementById("loginForm").addEventListener("submit", function() {
    event.preventDefault()
  
    const nomeUsuario = document.getElementById("username").value;
    const senha = document.getElementById("password").value;
    const mensagem = document.getElementById("message");
  
    if (autenticarUsuario(nomeUsuario, senha)) {
      mensagem.textContent = "Login bem-sucedido! Seja bem-vindo minha autarquia";
      mensagem.style.color = "green"
    } else {
      mensagem.textContent = "Nome de usuário ou senha incorretos.";
      mensagem.style.color = "red";
    }
  });