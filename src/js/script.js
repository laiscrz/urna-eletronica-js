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
});
