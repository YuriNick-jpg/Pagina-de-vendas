document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const formMessage = document.getElementById('formMessage');
  
    if (name === '' || email === '' || message === '') {
      formMessage.textContent = 'Por favor, preencha todos os campos!';
      formMessage.style.color = 'red';
    } else {
      formMessage.textContent = 'Mensagem enviada com sucesso!';
      formMessage.style.color = 'green';
  
      // Limpa o formulário
      document.getElementById('contactForm').reset();
    }
  });
  