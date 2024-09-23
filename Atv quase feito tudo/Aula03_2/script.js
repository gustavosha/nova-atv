var lista = ['Aluno1', 'Aluno2', 'Aluno3', 100];

// Funções associadas a cada botão

// Exibe a lista inteira no console
document.getElementById('mostrarLista').addEventListener('click', function() {
    console.log('Lista completa:', lista);
});

// Exibe o elemento na posição 3
document.getElementById('mostrarElemento').addEventListener('click', function() {
    console.log('Elemento na posição 3:', lista[3]);
});

// Exibe o tamanho do array
document.getElementById('mostrarTamanho').addEventListener('click', function() {
    console.log('Tamanho do array:', lista.length);
});

// Verifica se 'Aluno3' está no array
document.getElementById('verificarAluno3').addEventListener('click', function() {
    let posicao = lista.indexOf('Aluno3');
    if (posicao !== -1) {
        console.log("'Aluno3' está na posição:", posicao);
    } else {
        console.log("'Aluno3' não está no array.");
    }
});

// Altera o primeiro elemento do array
document.getElementById('alterarElemento').addEventListener('click', function() {
    lista[0] = 'Asdrubal';
    console.log('Primeiro elemento alterado para "Asdrubal":', lista);
});

// Adiciona 'Aluno4' ao array
document.getElementById('adicionarElemento').addEventListener('click', function() {
    lista.push('Aluno4');
    console.log('Elemento "Aluno4" adicionado:', lista);
});

// Remove o primeiro elemento do array
document.getElementById('removerPrimeiro').addEventListener('click', function() {
    lista.shift();
    console.log('Primeiro elemento removido:', lista);
});

// Remove o último elemento do array
document.getElementById('removerUltimo').addEventListener('click', function() {
    lista.pop();
    console.log('Último elemento removido:', lista);
});

// Exibe a lista com separador
document.getElementById('mostrarComSeparador').addEventListener('click', function() {
    console.log('Lista com separador:', lista.join(' - '));
});
