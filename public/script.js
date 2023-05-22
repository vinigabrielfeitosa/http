function enviarDados() {
    const cpf = document.getElementById('cpf').value;
    const senha = document.getElementById('senha').value;
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const idade = document.getElementById('nascimento').value;
    const telefone = document.getElementById('telefone').value;
    const animal = document.getElementById('animaldesejado').value;
    const condicoes = document.getElementById('condicoes').value;
    const experiencia = document.getElementById('experiencia').value;
    const informacoes = document.getElementById('informacoes').value;
  
    if (cpf && senha && nome && email && idade && telefone && animal && condicoes && experiencia) {
      fetch('/Usuarios',{
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ cpf: cpf, senha: senha, nome: nome, email: email, idade: idade, telefone: telefone, animal: animal, condicoes: condicoes, experiencia: experiencia, informacoes: informacoes})
      })
      .then(response => {
        alert("Cadastro realizado.");
      });
    } else {
      alert("Por favor, preencha todos os campos obrigatórios.");
    }

    location.reload();
  }
  
  const cpfInput1 = document.getElementById("cpf");
  const cpfInput2 = document.getElementById("cpf2");
  
  cpfInput1.addEventListener("input", formatCpf);
  cpfInput2.addEventListener("input", formatCpf);
  
  function formatCpf(event) {
    const cpf = event.target.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos do CPF
    const cpfLength = cpf.length;
  
    if (cpfLength === 0) {
      event.target.value = '';
    } else if (cpfLength <= 3) {
      event.target.value = cpf;
    } else if (cpfLength <= 6) {
      event.target.value = cpf.slice(0, 3) + '.' + cpf.slice(3);
    } else if (cpfLength <= 9) {
      event.target.value = cpf.slice(0, 3) + '.' + cpf.slice(3, 6) + '.' + cpf.slice(6);
    } else if (cpfLength <= 11) {
      event.target.value = cpf.slice(0, 3) + '.' + cpf.slice(3, 6) + '.' + cpf.slice(6, 9) + '-' + cpf.slice(9);
    } else {
      event.target.value = cpf.slice(0, 11);
    }
  }

  function mascaraTelefone(telefone) {
    telefone.value = telefone.value
      .replace(/\D/g, "") // remove caracteres não numéricos
      .replace(/^(\d{2})(\d)/g, "($1) $2") // formata o DDD e o primeiro dígito
      .replace(/(\d{5})(\d)/, "$1-$2"); // formata os últimos quatro dígitos
  }
  
  
