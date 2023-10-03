function setup() { //configuração do jogo
  createCanvas(500, 400);
  somDaTrilha.loop();
}

function draw() { //execução do jogo
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  voltaPosicaoInicialDoCarro();
  verificaColisao();
  incluiPontos();
  marcaPonto();
  limites();
}

