
function relogio(){
    
    function criandoSegundos(segundos) {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'GMT'
        });
    }

    console.log(criandoSegundos(10));

    const recebeHora = document.querySelector('#recebeHora');
    // const iniciar = document.querySelector('.iniciar');
    // const pausar = document.querySelector('.pausar');
    // const zerar = document.querySelector('.zerar');
    let segundos = 0;
    let timer;

    function iniciaRelogio(){
        timer = setInterval(function(){
        segundos++;
        recebeHora.innerHTML = criandoSegundos(segundos); 
        }, 1000);
    }

    document.addEventListener('click', function(event) {
        const elemento = event.target;
        if (elemento.classList.contains('zerar')){
            clearInterval(timer);
            recebeHora.classList.remove('pause');
            recebeHora.innerHTML = '00:00:00';
            segundos = 0;
        }

        if (elemento.classList.contains('iniciar')){
            recebeHora.classList.remove('pause');
            clearInterval(timer);
            iniciaRelogio();
        }

        if (elemento.classList.contains('pausar')){
            recebeHora.classList.add('pause');
            clearInterval(timer);
        }
    });
}

relogio();

// iniciar.addEventListener('click', function(eventos){
//     recebeHora.classList.remove('pause');
//     clearInterval(timer);
//     iniciaRelogio();
// });

// pausar.addEventListener('click', function(eventos){
//     recebeHora.classList.add('pause');
//     clearInterval(timer);
// });

// zerar.addEventListener('click', function(eventos){
//     clearInterval(timer);
//     recebeHora.innerHTML = '00:00:00';
//     segundos = 0;
// });

