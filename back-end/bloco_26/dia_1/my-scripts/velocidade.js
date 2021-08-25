const readline = require('readline-sync');

function velocidadeMedia() {
  const distancia = readline.question('Qual a distância em metros? ');
  const tempo = readline.question('Qual o tempo gasto em segundos? ');

  const result = (distancia / tempo).toFixed(1);
  console.log(`Velocidade média: ${result} m/s`);
  
};

velocidadeMedia();
