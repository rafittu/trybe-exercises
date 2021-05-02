// 8.1 - Exercício 1

const employeeForm = (fullName) => {
  const email = fullName.toLowerCase().split(' ').join('_');
  return {
    name: fullName,
    email: `${email}@trybe.com`
  };
};

const newEmployees = () => {
  const employees = {
    id1: employeeForm('Pedro Guerra'),
    id2: employeeForm('Luiza Drumond'),
    id3: employeeForm('Carla Paiva'),
  }

  return employees;
};

console.log(newEmployees(employeeForm));


// 8.1 - Exercício 2

const isTheSame = (myNumber, sortedNumber) => myNumber === sortedNumber;

const megaSenaResult = (myNumber, isTheSame) => {
  const sortedNumber = Math.floor(Math.random() * 5 + 1);

  return (myNumber, isTheSame) ? 'Parabéns você ganhou!' : 'Tente novamente =/';
};
console.log(megaSenaResult(3, isTheSame));


// 8.1 - Exercício 3

const correctAnswer = 'higher order function';
const userAnswer = 'HIGHER ORDER FUNCTION';

const checkAnswer = (correctAnswer) => (userAnswer) => correctAnswer === userAnswer.toLowerCase();

console.log(checkAnswer(correctAnswer)(userAnswer));


// 8.1 - Exercício 4

const checkAnswer = (correctAnswer, answerToVerify) => {

  if (answerToVerify === 'N.A') {
    return 0;
  } else if (correctAnswer === answerToVerify) {
    return 1;
  }
  return -0.5;

};

const verifyResult = (rightAnswers, studentAnswers, callBackCheckAnswer) => {
  let result = 0;

  for (let index = 0; index <= rightAnswers.length; index += 1) {
    result += callBackCheckAnswer(rightAnswers[index], studentAnswers[index]);
  };

  return `Sua pontuação é: ${result} pts`;
};

const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

console.log(verifyResult(rightAnswers, studentAnswers, checkAnswer));