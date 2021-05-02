// Exercício 10

let custo = 28;
let venda = 50;

if (custo >= 0 && venda >=0){
    let custoTotal = custo * 1.2;
    let lucroTotal = (venda - custoTotal) * 1000;
    console.log(lucroTotal);
}
else {
    console.log('valor de entrada menor que zero');
}


// Exercício 11

let salarioBruto = 27000;
let INSS;
let IR;

if (salarioBruto <= 1556.94){
    INSS = salarioBruto * 0.8;
}
else if (salarioBruto <= 2594.92){
    INSS = salarioBruto * 0.9;
}
else if (salarioBruto <= 5189.82){
    INSS = salarioBruto * 0.11;
}
else {
    INSS = 570.88
}

let salarioLiquido = salarioBruto - INSS;

if (salarioLiquido <= 1903.98){
    IR = 0;
}
else if (salarioLiquido <= 2826.65){
    IR = (salarioLiquido * 0.075) - 142.80;
}
else if (salarioLiquido <= 3751.05){
    IR = (salarioLiquido * 0.15) - 354.80;
}
else if (salarioLiquido <= 4664.68){
    IR = (salarioLiquido * 0.225) - 636.13;
}
else {
    IR = (salarioLiquido * 0.275) - 869.36;
}

console.log('Salario: ' + (salarioLiquido - IR));