let numeroSecreto = 0;
let intentos = 0;
let ListaNumerosSorteados = [];
let numeroMaximo = 10;

let titulo = document.querySelector('h1');
titulo.innerHTML = 'Juego del numero secreto';

let parrafo = document.querySelector('p');
parrafo.innerHTML = `Indica un numero del 1 al ${numeroMaximo}`;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}



function verificarIntento() {
    
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(numeroSecreto);
    console.log(intentos);
    if(numeroSecreto === numeroDeUsuario){
        asignarTextoElemento('p',`Acertastes el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor');
        }else{
            asignarTextoElemento('p','El numero secreto es mayor');
        } intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    
    let numeroGenerado = parseInt(Math.floor(Math.random()*numeroMaximo)+1);

    if(ListaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sorteo todos los numeros posibles');

    }else{
        if(ListaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();

        }else{
            ListaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;        
        }

    }    
}

function condicionesIniciales(){

    asignarTextoElemento("h1",'Juego del numero secreto');
    asignarTextoElemento("p",`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    document.querySelector('#reiniciar').setAttribute('disabled','true');

}

function reiniciarJuego(){

    limpiarCaja();
    condicionesIniciales();


}

condicionesIniciales();

