function math(a, b, c) {

  console.log(`${a}, ${b}, ${c}`);  

  const promise = new Promise((resolve, reject) => {
    if (typeof(a) !== 'number' || typeof(b) !== 'number' || typeof(c) !== 'number') {
      reject(Error("Informe apenas números"))
    };

    const result = (a + b) * c;

    if (result < 50) {
      reject(Error("Valor muito baixo"))
    };

    resolve(result);
  });

  return promise;
};

function getRandomNumber() {
  const number = Math.floor(Math.random() * 100 + 1);
  return number;
};

function callMath() {
  let a = getRandomNumber();
  let b = getRandomNumber();
  let c = getRandomNumber();

  console.log(`${a}, ${b}, ${c}`);

  math(a, b, c)
  .then(result => console.log(`${result}`))
  .catch(err => console.log(`${err}`));
};

callMath();
