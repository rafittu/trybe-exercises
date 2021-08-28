const fs = require('fs');
const util = require('util');

const readFileSimpsons = util.promisify(fs.readFile);
const writeFileSimpsons = util.promisify(fs.writeFile);

// 1- Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome .
// Por exemplo: 1 - Homer Simpson.

async function getAllSimpsons() {
  const simpsons = await readFileSimpsons('simpsons.json')
    .then((content) => JSON.parse(content));

  return simpsons.forEach(({ id, name }) => console.log(`${id} - ${name}`));
};

getAllSimpsons();


// 2- Crie uma função que receba o id de uma personagem como parâmetro e retorne 
// uma Promise que é resolvida com os dados da personagem que possui o id informado. 
// Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".

async function getSimpsonById(id) {
  try {
    await readFileSimpsons('simpsons.json')
      .then((content) => {
        const simpsons = JSON.parse(content);

        const selectedSimpson = simpsons.find((simpson) => simpson.id === id);

        if (!selectedSimpson) throw new Error(`ID "${id}" não encontrado.`);

        console.log(selectedSimpson.name);
        return selectedSimpson.name;
      });
  } catch (err) {
    console.log(`${err.message}`);
  }
};

getSimpsonById("3");


// 3- Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.

async function changeSimpsonsFile() {
  const simpsons = await readFileSimpsons('simpsons.json')
    .then((content) => JSON.parse(content));

  const filteredSimpsons = simpsons.filter((simpson) => simpson.id !== "10" && simpson.id !== "6");

  await writeFileSimpsons('simpsons.json', JSON.stringify(filteredSimpsons))
    .then(() => {
      console.log('Arquivo escrito com sucesso!');
    })
    .catch((err) => {
      console.error(`Erro ao escrever o arquivo: ${err.message}`);
    });
};

changeSimpsonsFile();


// 4- Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo,
// chamado simpsonFamily.json , contendo as personagens com id de 1 a 4.

async function simpsonFamily() {
  const simpsons = await readFileSimpsons('simpsons.json')
  .then((content) => JSON.parse(content));

  const simpsonsFamily = simpsons.filter((simpson) => simpson.id >= "1" && simpson.id <= "4");

  await writeFileSimpsons('simpsonFamily.json', JSON.stringify(simpsonsFamily))
  .then(() => {
    console.log('Arquivo escrito com sucesso!');
  })
  .catch((err) => {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  });
};

simpsonFamily();


// 5- Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz .

async function addSimpson() {
  const simpsonsFamily = await readFileSimpsons('simpsonFamily.json')
  .then((content) => JSON.parse(content));

  simpsonsFamily.push({ "id": "11", "name": "Nelson Muntz" });

  await writeFileSimpsons('simpsonFamily.json', JSON.stringify(simpsonsFamily))
  .then(() => {
    console.log('Arquivo escrito com sucesso!');
  })
  .catch((err) => {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  });  
};

addSimpson();


// 6- Crie uma função que substitua o personagem Nelson Muntz pela 
// personagem Maggie Simpson no arquivo simpsonFamily.json .

async function replaceSimpson() {
  const simpsonsFamily = await readFileSimpsons('simpsonFamily.json')
  .then((content) => JSON.parse(content));

  const familyWithoutNelson = simpsonsFamily.filter((simpson) => simpson.id !== "11")

  familyWithoutNelson.push({ "id": "12", "name": "Maggie Simpson" });

  await writeFileSimpsons('simpsonFamily.json', JSON.stringify(familyWithoutNelson))
  .then(() => {
    console.log('Arquivo escrito com sucesso!');
  })
  .catch((err) => {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  });  
};

replaceSimpson();
