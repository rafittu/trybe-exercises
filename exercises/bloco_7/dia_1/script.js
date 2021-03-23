function testingScope(escopo) {
  if (escopo === true) {
    var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    console.log(ifScope);
  } else {
    var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
  console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
}

testingScope(true);

// Parte I - Exercício 1

const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope(true);

// Exercício 2

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

oddsAndEvens.sort(function(a, b){return a - b});

console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`);

// Parte II - Exercício 1

const factorial = (number) => number > 1 ? number * factorial(number - 1) : 1;
console.log(factorial(3));

// Exercício 2

const longestWord = (text) => {
  let wordArray = text.split(' ');
  let maxLength = 0;
  let result = '';

  for (const word of wordArray) {
    if (word.length > maxLength) {
      maxLength = word.length;
      result = word;
    }
  }
  return result;
};
console.log(longestWord("Qual a maior palavra ?"));