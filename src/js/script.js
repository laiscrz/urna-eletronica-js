document.addEventListener('click', function(e) {
    // Seleciona o elemento de input com o nome 'nNum'
    let input_candidato = document.getElementsByName('nNum')[0];

    // Objeto com informações dos candidatos e suas imagens
    let candidatos = {
        11: {
            src: 'src/assets/image/github-octocat.png',
            nome: 'Octocat',
            msg: 'CONFIRMA SEU VOTO'
        },
        16: {
            src: 'src/assets/image/github-octocat-pony.png',
            nome: 'Octocat Pony',
            msg: 'CONFIRMA SEU VOTO'
        },
        20 : {
            src: 'src/assets/image/github-octocat-mario.png',
            nome: 'Octocat Mario Bros',
            msg: 'CONFIRMA SEU VOTO'
        },
        corrige: {
            src: 'src/assets/image/candidato.jpg',
            nome: '',
            msg: 'DIGITE O NÚMERO'
        },
        branco: {
            src: 'src/assets/image/candidato.jpg',
            nome: 'BRANCO',
            msg: 'CONFIRME A ESCOLHA'
        }
    }

    // Seleciona elementos de imagem e de nome do candidato
    let foto_candidato = document.querySelector('img');
    let nome_candidato = document.querySelector('#nome');

    // Função para atribuir a imagem e o nome do candidato selecionado
    function source_candidato(num_candidato) {
        foto_candidato.src = candidatos[num_candidato]['src'];
        nome_candidato.innerHTML = candidatos[num_candidato]['nome'];
        document.getElementsByTagName('h1')[0].innerHTML = candidatos[num_candidato]['msg'];
    }

    // BRANCO
    // Se o botão clicado for para votar em branco
    if (e.target.dataset.value == 'branco') {
        input_candidato.value = "00"; // Define o valor do input como "00"
        return source_candidato('branco'); // Atualiza a imagem e o nome do candidato como branco
    }

    // CORRIGE - LIMPAR
    // Se o botão clicado for para corrigir o voto
    if (e.target.dataset.value == 'corrige') {
        input_candidato.value = ""; // Limpa o valor do input
        return source_candidato('corrige'); // Atualiza a imagem e o nome do candidato como voto corrigido
    }
});
