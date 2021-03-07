// Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body
let newTitle = document.createElement('h1');
document.body.appendChild(newTitle);
newTitle.innerText = 'Exercício 5.2 - JavaScript';

// Adicione a tag div com a classe main-content como filho da tag body
let newDiv = document.createElement('div');
newDiv.className = 'main-content';
document.body.appendChild(newDiv);

// Adicione a tag div com a classe center-content como filho da tag div criada no passo 2
let centerDiv = document.createElement('div');
centerDiv.className = 'center-content';
newDiv.appendChild(centerDiv);

// Adicione a tag p como filho do div criado no passo 3 e coloque algum texto
let newParagraph = document.createElement('p');
centerDiv.appendChild(newParagraph);
newParagraph.innerText = 'Eu sou mulher do fim do mundo';

// Adicione a tag div com a classe left-content como filho da tag div criada no passo 2
let leftDiv = document.createElement('div');
leftDiv.className = 'left-content';
newDiv.appendChild(leftDiv);

// Adicione a tag div com a classe right-content como filho da tag div criada no passo 2
let rightDiv = document.createElement('div');
rightDiv.className = 'right-content';
newDiv.appendChild(rightDiv);

// Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do div criado no passo 5
let newImage = document.createElement('img');
newImage.src = 'https://picsum.photos/200';
newImage.className = 'small-image';
leftDiv.appendChild(newImage);

// ?????????? - Adicione uma lista não ordenada com os valores de 1 a 10 por extenso como valores da lista. Essa lista deve ser filha do div criado no passo 6
let newList = document.createElement('ul');
rightDiv.appendChild(newList);

let lines = document.createElement('li');
let numbers = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez'];

for (index = 0; index < numbers.length; index += 1) {
  lines.innerText += numbers[index];
  newList.appendChild(lines);
}

// Adicione 3 tags h3 , todas sendo filhas do div criado no passo 2
let firstTag = document.createElement('h3');
let secondTag = document.createElement('h3');
let thirdTag = document.createElement('h3');
newDiv.appendChild(firstTag);
newDiv.appendChild(secondTag);
newDiv.appendChild(thirdTag);

// OK - Adicione a classe title na tag h1 criada
newTitle.className = 'title';

// OK - Adicione a classe description nas 3 tags h3 criadas
firstTag.className = 'description';
secondTag.className = 'description';
thirdTag.className = 'description';

// Remova o div criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild()
newDiv.removeChild(leftDiv);

// Centralize o div criado no passo 6 (aquele que possui a classe right-content ). Dica: para centralizar, basta configurar o margin-right: auto do div 
rightDiv.style.marginRight = 'auto';

// Troque a cor de fundo do elemento pai da div criada no passo 3 (aquela que possui a classe center-content ) para a cor verde
centerDiv.parentNode.style.backgroundColor = 'green';

// Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8
/* elementUl.lastChild.remove();
   elementUl.lastChild.remove(); */