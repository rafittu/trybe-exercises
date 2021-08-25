const readline = require('readline-sync');

function verificaResultado(random, numero) {
  if (random == numero) {
    console.log('Parabéns, número correto!');
  } else {
    console.log(`Opa, não foi dessa vez =( O número sorteado foi o ${random}!`);
  };
};

function sorteio() {
  const random = parseInt(Math.random() * 10);
  const numero = readline.question('Digite um número de 0 a 10: ');

  verificaResultado(random, numero);

  const tryAgain = readline.question('Deseja tentar novamente? Digite "sim" ou "não"!');

  if (tryAgain == "sim") {
    return sorteio();
  } else {
    console.log('Até a pŕoxima!!');
  };

};

sorteio();
