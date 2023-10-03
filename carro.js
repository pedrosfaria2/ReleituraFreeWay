let yCarros = [40, 96, 150, 210, 262, 318]; //array que guarda as posições y dos carros.
let velocidadeCarros = [2, 2.5, 4, 5, 3, 3.7]; //array que guarda as velocidades dos carros.
let xCarros = [600, 600, 600, 600, 600, 600]; //array que guarda as posições x dos carros, ou seja, eles estão iniciando o trajeto fora da tela.
let comprimentoCarro = 50;
let alturaCarro = 40;


function mostraCarro(){ //função que mostra os carros na tela, de acordo com o preload feito em imagens.js
  for(let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}

function movimentaCarro(){ //função que movimenta os carros, de acordo com a velocidade de cada um.
  for (let i = 0; i < imagemCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaPosicaoInicialDoCarro(){ //função que volta os carros para a posição inicial, quando eles saem da tela.
  for(let i = 0; i < imagemCarros.length; i++){  
    if (passouTodaATela(xCarros[i])){
      xCarros[i] = 600;
    }
  }
}

function passouTodaATela(xCarro){ //função que verifica se o carro terminou seu trajeto, para que possa voltar para a posição inicial quando isso acontecer.
  return xCarro < -50;
}