
let treme = document.querySelector('.imgFechado')//Selecionando a imagem fechada
treme.addEventListener('click', tremer)//Adicionando o evento de click e funcao tremer

let btnTryAgain = document.querySelector('#btnTryAgain')//selecionando o botao 
btnTryAgain.addEventListener('click', goBack)//adicionando o evento e funcao voltar

let tocar = document.querySelector('.audio')// selecionando a tag <audio>
document.querySelector('.musica').addEventListener('click', playAudio)// selecionando a classe 'musica' da tag <img> e aplicando o evento de click para tocar



function tremer() {
    document.querySelector('.imgFechado').classList.toggle("tremendo")
}

function handleClick() {
    document.querySelector('.main1').classList.add('hide')
    document.querySelector('.main2').classList.remove('hide')
}

function goBack() {
    document.querySelector('.main2').classList.add('hide')
    document.querySelector('.main1').classList.remove('hide')
}

function playAudio() {
    tocar.play()
}

let messageRandom = document.querySelector('.imgFechado');//variavél a imagem do biscoito fechado
let result = document.querySelector('#msg');//variavel da mensagem


let msg = ['Eu acho que não importa o quanto você tente, você não pode escapar do seu passado.',
    'Tudo acontece por uma razão.',
    'Não adiante fugir, voce encarar a realidade',
    'Hoje é um bom dia para "dar ruim"',
    'Se esconder é inevitável',
    'Não corra, ataque!',
    'Você não é o unico que quer sobreviver.',
    'Não ouça a voz de extranhos',
    'Voçê não tem ideia do que é perda.'
];

function getRandomNumber(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;

    return result;
}

messageRandom.addEventListener('click', () => {
    let index = getRandomNumber(0, msg.length - 1);
    result.innerText = msg[index];
});
