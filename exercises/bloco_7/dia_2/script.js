// 7.2 - Conteúdo II [Object.keys]

const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom',
};

const skills = (student) => {
  const skillsArray = Object.keys(student);

  for (index in skillsArray) {
    console.log(`Habilidade: ${skillsArray[index]}, Nível: ${student[skillsArray[index]]}`);
  }
};
skills(student2); // Exibe as habilidades e o nível delas de cada estudante

// 7.2 - Conteúdo III [Object.values]

const skills = (student) => {
  const skillsArray = Object.keys(student);
  const skillsValue = Object.values(student)

  for (index in skillsArray) {
    console.log(`Habilidade: ${skillsArray[index]}, Nível: ${skillsValue[index]}`); // Utilizando o Object.values
  }
};
skills(student1);

// 7.2 - Conteúdo IV [Object.entries]

const países = {
  França: 'Paris',
  Brasil: 'Brasília',
  Espanha: 'Madrid',
  Portugal: 'Lisboa',
};

const pairKeyValue = Object.entries(países); // Retorna um array e cada elemento é um array com o objeto e o seu valor
// console.log(pairKeyValue);

for(index in pairKeyValue) { // Retornaos objetos e valores separadamente
  console.log('--------');
  console.log('Pais:', pairKeyValue[index][0]);
  console.log('Capital:', pairKeyValue[index][1]);
};

// 7.2 - Conteúdo V [Object.assign]

const person = {
  name: 'Roberto',
};

const lastName = {
  lastName: 'Silva',
};

const clone = Object.assign(person, lastName);
// console.log(clone);

clone.name = 'Maria';

// console.log('Mudando a propriedade name através do objeto clone:');
// console.log(clone);
// console.log(person);

person.lastName = 'Ferreira'

console.log('Mudando a propriedade lastName através do objeto person');
console.log(clone);
console.log(person);

// Linha 67 até 80: ao modificar o clone, o objeto original também é modificado.
// No exemplo a baixo, o novo objeto é criado sem modificar o objeto inicial!

const person = {
  name:'Roberto',
};

const lastName = {
  lastName: 'Silva',
};

const newPerson = Object.assign({},person,lastName);
newPerson.name = 'Gilberto';

console.log(newPerson);
console.log(person);

// 7.2 - Exercício 1, Parte I

const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  const name = order.order.delivery.deliveryPerson;
  const deliveryTo = order.name;
  const phoneNumber = order.phoneNumber;
  const street = order.address.street;
  const number = order.address.number;
  const apt = order.address.apartment;

  console.log(`Ola ${name}, entrega para: ${deliveryTo}, telefone ${phoneNumber}, ${street} Nº${number}, AP ${apt}.`)
};
customerInfo(order);

// 7.2 - Exercício 2, Parte I

const orderModifier = (order) => {
  const newPerson = Object.assign({}, order); // Altera o objeto clone
  newPerson.name = 'Luiz Silva';
  // const newPerson = order.name = 'Luiz Silva'; [Altera o objeto original]

  const pizza = Object.keys(order.order.pizza);
  const drink = order.order.drinks.coke.type;

  const newPrice = Object.assign({}, order);
  newPrice.payment.total = 50;

  console.log(`Olá ${newPerson.name}, o total do seu pedido de ${pizza} e ${drink} é de R$${newPrice.payment.total},00.`)
}
orderModifier(order);

// 7.2 - Exercícios, Parte II

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// 7.2 - Exercício 1, Parte II

const newKey = (object, key, value) => {
  object[key] = value;
}
newKey(lesson2, 'turno', 'noite');
console.log(lesson2);

// 7.2 - Exercício 2, Parte II

const listKeys = (object) => Object.keys(object);
console.log(listKeys(lesson1));

// 7.2 - Exercício 3, Parte II

const objectLength = (object) => Object.keys(object).length;
console.log(`O tamanho do objeto é de ${objectLength(lesson3)} chaves!`);

// 7.2 - Exercício 4, Parte II

const listObjValue = (obj) => Object.values(obj);
console.log(listObjValue(lesson2));

// 7.2 - Exercício 5, Parte II

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons);

// 7.2 - Exercício 6, Parte II

// 7.2 - Exercício 7, Parte II

// 7.2 - Exercício 8, Parte II