const readline = require('readline-sync');

function calcularIMC() {
  const peso = readline.question('Qual o seu peso? ');
  const altura = readline.question('Qual a sua altura? ');

  const result = (peso / Math.pow(altura / 100, 2)).toFixed(2);

  if (result < 18.5) {
    console.log(`IMC: ${result} - Abaixo do peso (magreza)`);
  } else if ( result >= 18.5 && result <= 24.9) {
    console.log(`IMC: ${result} - Peso normal`);
  } else if (result >= 25.0 && result <= 29.9) {
    console.log(`IMC: ${result} - Acima do peso (sobrepeso)`);
  } else if (result >= 30.0 && result <= 34.9) {
    console.log(`IMC: ${result} - Obesidade grau I`);
  } else if (result >= 35.0 && result <= 39.9) {
    console.log(`IMC: ${result} - Obsedidade grau II`);
  } else {
    console.log(`IMC: ${result} - Obsedidade grau III e IV`);
  };
  
};

calcularIMC();
