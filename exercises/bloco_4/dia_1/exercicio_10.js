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