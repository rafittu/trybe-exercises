// Exercicio 1

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  console.log('Bem-vinda, ' + info.personagem);


  // Exercício 2

  info['recorrente'] = 'Sim';
  console.log(info);


  // Exercício 3

  for (let key in info){
      console.log(key);
  }


  // Exercício 4

  for (let key in info){
      console.log(info[key]);
  }


  // Exercício 5

  let info2 = {
      personagem: 'Tio Patinhas',
      origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
      nota: 'O último MacPatinhas',
      recorrente: 'Sim'
  }

  for (let key2 in info){
      if (
          info[key2] === info.recorrente &&
          info[key2] === 'Sim' &&
          info2[key2] === 'Sim'
      ) {
          console.log('Ambos recorrentes');
      } else {
          console.log(info[key2] + ' e ' + info2[key2]);
      }
  }