// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele
function changeColor(color) {
    document.querySelector('#elementoOndeVoceEsta').parentNode.style.color = color;
}
changeColor('red');

//Acesse o primeiroFilhoDoFilho e adicione um texto a ele
function addText(text) {
    document.getElementById('primeiroFilhoDoFilho').innerText = text;
}
addText('Primeiro filho do filho!');

// Crie um irmão para elementoOndeVoceEsta
let newDiv = document.createElement('div');
newDiv.id = 'irmaoElementoOndeEstou';
document.getElementById('pai').appendChild(newDiv);

// Crie um filho para elementoOndeVoceEsta
let newSon = document.createElement('div');
newSon.id = 'terceiroFilhoElementoOndeEstou';
document.getElementById('elementoOndeVoceEsta').appendChild(newSon);

// Crie um filho para primeiroFilhoDoFilho
let newSon2 = document.createElement('div');
newSon2.id = 'filhoDoPrimeiroFilhoDoFilho';
document.getElementById('primeiroFilhoDoFilho').appendChild(newSon2);

// A partir desse filho criado, acesse terceiroFilho
document.getElementById('filhoDoPrimeiroFilhoDoFilho').parentNode.parentNode.nextElementSibling

// Remova todos os elementos da página, menos pai , elementoOndeVoceEsta e primeiroFilhoDoFilho
