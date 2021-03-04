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