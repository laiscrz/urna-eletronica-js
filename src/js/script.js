document.addEventListener('click', function(e) {
    let input_candidato = document.getElementsByName('nNum')[0];

    let candidatos = {
        11: {
            src: 'src/assets/profile-candidatos/github-octocat.png',
            nome: 'Octocat',
            msg: 'CONFIRMA SEU VOTO'
        },
        16: {
            src: 'src/assets/profile-candidatos/github-octocat-pony.png',
            nome: 'Octocat Pony',
            msg: 'CONFIRMA SEU VOTO'
        },
        20 : {
            src: 'src/assets/profile-candidatos/github-octocat-mario.png',
            nome: 'Octocat Mario Bros',
            msg: 'CONFIRMA SEU VOTO'
        },
        corrige: {
            src: 'src/assets/profile-candidatos/candidato.jpg',
            nome: '',
            msg: 'DIGITE O NÚMERO'
        },
        branco: {
            src: 'src/assets/profile-candidatos/candidato.jpg',
            nome: 'BRANCO',
            msg: 'CONFIRME A ESCOLHA'
        }
    }

    let foto_candidato = document.querySelector('img');
    let nome_candidato = document.querySelector('#nome');

    function source_candidato(num_candidato) {
        foto_candidato.src = candidatos[num_candidato]['src'];
        nome_candidato.innerHTML = candidatos[num_candidato]['nome'];
        document.getElementsByTagName('h1')[0].innerHTML = candidatos[num_candidato]['msg'];
    }

    // BRANCO
    if (e.target.dataset.value == 'branco') {
        input_candidato.value = "00";
        return source_candidato('branco');
    }
    // LIMPAR
    if (e.target.dataset.value == 'corrige') {
        input_candidato.value = "";
        return source_candidato('corrige');
    }

    // Quando clicamos em um botão numérico
    if (e.target.tagName == 'BUTTON') {
        let value = e.target.dataset.value;
        if (value !== 'branco' && value !== 'corrige') {
            input_candidato.value += value;
            if (input_candidato.value.length >= 2) {
                source_candidato(input_candidato.value);
            }
        }
    }
});

document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); 

});
