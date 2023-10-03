//variaveis do ator
let yAtor = 366;
let xAtor = 245;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){ //função que mostra o ator, com base no preload feito em imagens.js
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){ //função que movimenta o ator, com base nas teclas pressionadas. as teclas usadas são as setas do teclado. 
  if(keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if(keyIsDown(DOWN_ARROW)){
    yAtor += 3;
  }
  
  if(keyIsDown(LEFT_ARROW)){
     xAtor -= 3;
  }
  if(keyIsDown(RIGHT_ARROW)){
    xAtor += 3;    
  }
}

function verificaColisao(){ //função que verifica se houve colisão entre o ator e os carros. é usada a função collideRectCircle do p5.collide2d. Dado o formato do ator e dos carros, fizemos uso da função collideRectCircle,
  for (let i = 0 ; i < imagemCarros.length; i++){ //que verifica a colisão entre um retângulo e um círculo. em caso de colisão, o ator é levado para a posição inicial e o som da colisão é tocado. Um ponto também é subtraído
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    if (colisao){
      voltaAtorParaPosicaoInicial();
      somDaColisao.play();
      if(pontosMaiorQueZero()){ //verificação para que não hajam pontos negativos no score.
        meusPontos--;
      }
    }
  }
  
}

function pontosMaiorQueZero(){ //função que verifica se os pontos são maiores que zero.
  return meusPontos>0;
}

function voltaAtorParaPosicaoInicial(){ //função que volta o ator para a posição inicial.
  yAtor = 366;
}

function incluiPontos(){ //função que inclui o placar no jogo.
  textAlign(CENTER);
  textSize(25);
  fill(color(255,240,60));
  text(meusPontos, width / 2, 27 );
}

function marcaPonto(){ //função que marca o ponto quando o ator chega ao topo da tela.
  if(yAtor < 15){
    meusPontos++;
    voltaAtorParaPosicaoInicial();
    somDoPonto.play();
  }
}

function limites(){ //função que limita o ator dentro da tela.
  if(xAtor < 0){
    xAtor = 0;
  }
  if(xAtor > 470){
    xAtor = 470;
  }
  if(yAtor < 0){
    yAtor = 0;
  }
  if(yAtor > 370){
    yAtor = 370;
  }
}
