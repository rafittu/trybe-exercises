const math = require('./math')

describe('Testing math mock functions', () => {
  it('Testa a chamada da funcao subtrair', () => {
    math.subtrair = jest.fn().mockReturnValue();
    math.subtrair();
    expect(math.subtrair).toHaveBeenCalled();
  });

  it(`Testa a chamada e o retorno da funcao multiplicar, retorno padrao sendo '10'`, () => {
    math.multiplicar = jest.fn().mockReturnValue(10);
    math.multiplicar();
    expect(math.multiplicar).toHaveBeenCalled();
    expect(math.multiplicar()).toBe(10);
  });

  it('Testa a chamada, o retorno e os parâmetros passados na funcao somar', () => {
    math.somar = jest.fn().mockImplementation((a, b) => a + b);
    math.somar(1, 7);
    expect(math.somar).toHaveBeenCalled();
    expect(math.somar).toHaveBeenCalledWith(1, 7);
    expect(math.somar(1, 7)).toBe(8);
  });

  // Same test as above, but using async mode =>
  it('Testa a chamada, o retorno e os parâmetros passados na funcao somar', async () => {
    math.somar = jest.fn().mockImplementation((a, b) => Promise.resolve(a + b));
    const result = await math.somar(3, 6);
    expect(math.somar).toHaveBeenCalled();
    expect(math.somar).toHaveBeenCalledWith(3, 6);
    expect(result).toBe(9);
  });
});