document.addEventListener('DOMContentLoaded', function () {

    document.getElementById('form-sorteador').addEventListener('submit', function (evento) {
        evento.preventDefault();

        const numeroMaximo = 6;
        const numeroAleatorio = Math.floor(Math.random() * numeroMaximo) + 1;

        const resultado = document.getElementById('resultado-valor');
        const boxResultado = document.querySelector('.resultado');

        boxResultado.style.display = 'block';

        if (numeroAleatorio <= 4) {
            resultado.innerText = "Parabéns, retire seu brinde!";
        } else {
            resultado.innerText = "Não foi dessa vez, tente novamente!";
        }
    });

    document.getElementById('btn-limpar').addEventListener('click', function () {
        document.getElementById('resultado-valor').innerText = '';
        document.querySelector('.resultado').style.display = 'none';
    });

});
