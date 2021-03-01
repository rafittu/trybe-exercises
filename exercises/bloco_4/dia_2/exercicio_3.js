// Exercício 3

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let soma = 0;

for (let i = 0; i < numbers.length; i++){
    soma += numbers[i];
}

let media = soma / numbers.length;

console.log(media);


// Exercício 4

if (soma > 20){
    console.log('valor maior que 20');
} else {
    console.log('valor menor ou igual a 20');
}


// Exercício 5

let maiorValor = 0;

for (let i = 0; i < numbers.length; i++){
    if (numbers[i] > maiorValor) {
        maiorValor = numbers[i];
    }
}

console.log(maiorValor);