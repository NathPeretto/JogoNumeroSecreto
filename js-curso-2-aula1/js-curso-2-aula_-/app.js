let numeroMinimo = 1;
let numeroMaximo = 10;
let tentativas = 1;
let NumeroSecreto = GeradorDeNumero();

function telaInicial() {
    exibirTextoNaTela('h1', 'Bem Vindo ao Jogo do Número Secreto');
    exibirTextoNaTela('p', `Escolha um número de ${numeroMinimo} a ${numeroMaximo}`);
}

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
        campo.innerHTML = texto;
        responsiveVoice.speak(texto, 'Brazilian Portuguese Female',{rate:1} );
}
telaInicial();
function GeradorDeNumero() {
   return parseInt(Math.random() * numeroMaximo + 1);
}
console.log(NumeroSecreto);
function verificarChute() {
    let chute = document.querySelector('input').value;
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    if (chute == NumeroSecreto){
        exibirTextoNaTela('h1', 'Parabéns');
        exibirTextoNaTela('p', `Você acertou o numero secreto ${NumeroSecreto} em ${tentativas} ${palavraTentativa}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(chute > NumeroSecreto){
            
            exibirTextoNaTela('p', `o número secreto é menor que ${chute}`);
        } else {
            exibirTextoNaTela('p', `o número secreto é maior que ${chute}`);
        }
        tentativas++;
        limparCampo();
    }
}
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
    
}
function iniciarNovoJogo(){
    telaInicial();
    NumeroSecreto = GeradorDeNumero();
    limparCampo();
    tentativas = 1;
    document.getElementById('reiniciar').setAttribute('disabled',true);
}
