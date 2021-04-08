const specialFruit = ['banana', 'manga', 'maçã'];

const additionalItens = ['morango', 'leite condensado', 'granola'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));