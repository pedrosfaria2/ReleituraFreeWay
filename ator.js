//variaveis do ator
let yAtor = 366;
let xAtor = 245;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
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

function verificaColisao(){
  for (let i = 0 ; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    if (colisao){
      voltaAtorParaPosicaoInicial();
      somDaColisao.play();
      if(pontosMaiorQueZero()){
        meusPontos--;
      }
    }
  }
  
}

function pontosMaiorQueZero(){
  return meusPontos>0;
}

function voltaAtorParaPosicaoInicial(){
  yAtor = 366;
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255,240,60));
  text(meusPontos, width / 2, 27 );
}

function marcaPonto(){
  if(yAtor < 15){
    meusPontos++;
    voltaAtorParaPosicaoInicial();
    somDoPonto.play();
  }
}

function limites(){
  if(xAtor < 0){
    xAtor = 0;
  }
  if(xAtor > 570){
    xAtor = 570;
  }
  if(yAtor < 0){
    yAtor = 0;
  }
  if(yAtor > 370){
    yAtor = 370;
  }
}