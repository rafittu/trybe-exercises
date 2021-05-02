// Parte II

const name = "Rafael";
const birthCity = "Belo Horizonte";
let birthYear = 1994;
birthYear = 2020;


// Parte III

let base = 5;
let altura = 8;
let area = 40;
let perimetro = 26;


// Parte IV

let score = 90;

if (score >= 80){
    console.log('Parabéns, você foi aprovado!');
}
else if (score >= 60  && score < 80){
    console.log('Você está na nossa lista de espera.');
}
else if (score < 60){
    console.log('Você foi reprovado.');
}


// Parte IV

let status = 'aprovado';

switch (status) {
    case 'aprovado':
      console.log('Parabéns, você foi aprovado!');
      break;

    case 'lista':
      console.log('Você está na nossa lista de espera');
      break;

    case 'reprovado':
      console.log('Você foi reprovado');
      break;

    default:
      console.log('não se aplica');
}