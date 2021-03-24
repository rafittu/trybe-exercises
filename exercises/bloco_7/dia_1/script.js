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

// Exercício 3

function contador() {
  let text = document.getElementById("text");
  let clickCount = 0;

  document.getElementById("click").addEventListener("click", () => text.innerHTML = clickCount += 1);
  document.getElementById("clear").addEventListener("click", () => text.innerHTML = clickCount = 0);

  return text;
}
contador();