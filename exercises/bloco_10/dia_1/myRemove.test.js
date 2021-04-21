const remove = require('./myRemove');

describe('Requisito 2', () => {
  const numbers = [1, 2, 3, 4];
  it('remove number 3', () => {
    expect([1, 2, 4]).toEqual(remove(numbers, 3));
  });

  it('check if arr doesnt contain number 3', () => {
    expect(remove(numbers, 3)).not.toContain(3);
  });
});
