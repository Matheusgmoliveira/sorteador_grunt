document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('form-sorteador').addEventListener('submit', function (evento) {
        evento.preventDefault();

        let numeroMaximo = 6;
        numeroMaximo = parseInt(numeroMaximo);

        let numeroAleatorio = Math.random() * numeroMaximo;
        numeroAleatorio = Math.floor(numeroAleatorio + 1);

        document.getElementById('resultado-valor').innerText = numeroAleatorio;
        document.querySelector('.resultado').style.display = 'block';

        if (numeroAleatorio <= 4) {
            document.getElementById('resultado-valor').innerText = "Parabéns, retire seu brinde!";
        }else{
           document.getElementById('resultado-valor').innerText = "Não foi dessa vez, Tente novamente!"; 
        }
    });
});
