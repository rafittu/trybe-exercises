const { uppercase, findUserById, getUserName, findAnimalByName, getAnimal } = require('./script');
const { getRepos } = require('./findRepo');

describe('Uppercase letters', () => {
  it(`uppercase 'test' to be 'TEST'`, (done) => {
    uppercase('test', (str) => {
      expect(str).toBe('TEST');
      done();
    });
  });
});

describe('Get username - promise', () => {
  it('when the user id exists, returns the username', () => {
    expect.assertions(1);
    return getUserName(5).then(user => expect(user).toEqual('Paul'));
  });

  it('when the user doenst exist, returns an error', () => {
    expect.assertions(1);
    return getUserName(9).catch(error => expect(error).toEqual({ error: 'User with 9 not found.' }));
  });
});

describe('Get username - async/await', () => {
  it('when the user id exists, returns the username', async () => {
    const user = await getUserName(4);
    expect(user).toEqual('Mark');
  });

  it('when the user doenst exist, returns an error', async () => {
    try {
      await getUserName(9);
    } catch (error) {
      expect(error).toEqual({ error: 'User with 9 not found.' })
    };
  });
});

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch(error =>
        expect(error).toEqual('Nenhum animal com esse nome!')
      );
    });
  });
});
