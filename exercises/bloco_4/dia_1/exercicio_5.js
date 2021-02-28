// Exercício 5

let A = 60;
let B = 30;
let C = 90;

if (A + B + C === 180){
    console.log('true');
}
else if (A + B + C > 180){
    console.log('false');
}
else if (A + B + C < 0){
    console.log('inválido');
}


// Exercício 6

let peça = 'torre';

switch(peça.toLowerCase()) {
    case 'rei':
        console.log('se move em todas as direções e somente uma casa de cada vez');
        break;
    case 'rainha':
        console.log('se move ao longo da horizontal, vertical e giagonais, mas não pode pular outras peças');
        break;
    case 'bispo':
        console.log('se move ao longo da diagonal e não pode pular outras peças');
        break;
    case 'cavalo':
        console.log('se movimenta em forma de "L", duas casas em sentido horizontal e mais uma na vertica, ou vice-versa, além de ser a única peça que pode pular as outras');
        break;
    case 'torre':
        console.log('se movimenta na vertical ou horizontal, mas não pode pular outras peças');
        break;
    case 'peão':
        console.log('se movimenta uma casa pra frente e captura peça na diagonal');
        break;
    default:
        console.log('peça inválida');
        break;
}


// Exercício 7

let score = 81;

if (score < 0 || score > 100){
    console.log('valor inválido');
}
else if (score >= 90) {
    console.log('A');
}
else if (score >= 80 && score < 90){
    console.log('B');
}
else if (score >= 70 && score < 80){
    console.log('C');
}
else if (score >= 60 && score < 70){
    console.log('D');
}
else if (score >= 50 && score < 60){
    console.log('E');
}
else {
    console.log('F');
}