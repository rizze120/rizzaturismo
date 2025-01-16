var typed = new Typed('.element', {
    strings: ["Sua Empresa.", "A Vida.", "Seus Resultados."],
    typeSpeed: 120,
    backSpeed: 60,
    backDelay: 3000,
    loop: true
});

// Abrir o modal
document.getElementById('solicitar-btn').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'block';
});

// Fechar o modal
document.getElementsByClassName('close')[0].addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
});

// Fechar o modal ao clicar fora dele
window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('modal')) {
        document.getElementById('modal').style.display = 'none';
    }
});

// Processar o formulário
document.getElementById('solicitar-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Formulário enviado com sucesso!');
    document.getElementById('modal').style.display = 'none';
});