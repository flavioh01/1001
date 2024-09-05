// Alterna a sinopse ao clicar na imagem do livro
function toggleSynopsis(id) {
    const synopsis = document.getElementById(id);
    synopsis.style.display = synopsis.style.display === 'block' ? 'none' : 'block';
}

// Menu hambúrguer
document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('active');
});

//  Botão de modo escuro
document.querySelector('.dark-mode-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
