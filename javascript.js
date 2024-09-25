// Mensagem ao clicar no botão "Obter Orçamento"
function mostrarMensagem() {
    alert("Por favor, entre em contacto para solicitar um orçamento.");
}

// Manipulação do envio do formulário
document.getElementById('form-contacto').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio padrão

    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var mensagem = document.getElementById('mensagem').value;

    if (nome && email && mensagem) {
        alert("Obrigado " + nome + "! A sua mensagem foi enviada.");
        document.getElementById('form-contacto').reset(); // Limpa o formulário
    } else {
        alert("Por favor, preencha todos os campos.");
    }
});
