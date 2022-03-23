// Puedes probar las diferentes soluciones comentando y descomentando lineas
const { sumOfNumbers } = require(".");
// const { sumOfNumbers } = require("./solutions/01-fuerzaBruta.for");
// const { sumOfNumbers } = require("./solutions/02-fuerzaBruta.reduce");
// const { sumOfNumbers } = require("./solutions/03-recursion");
// const { sumOfNumbers } = require("./solutions/04-aritmetica");

describe("Sum of number between 1 and N", () => {
  it('debería retornar 20100 por defecto o n = 200', () => {
    expect(sumOfNumbers()).toBe(20100);
  });

  it('debería retornar 55 para n = 10', () => {
    expect(sumOfNumbers(10)).toBe(55);
  });

  it('debería retornar 21 para n = 6', () => {
    expect(sumOfNumbers(6)).toBe(21);
  });

  it('debería retornar 28 para n = 7', () => {
    expect(sumOfNumbers(7)).toBe(28);
  });

  it('debería retornar 144453 para n = 537', () => {
    expect(sumOfNumbers(537)).toBe(144453);
  });

  it('debería retornar 500500 para n = 1000', () => {
    expect(sumOfNumbers(1000)).toBe(500500);
  });

  // Este test case solo pasa con la solucion aritmetica
  // `for` no demora una eternidad (CTRL + C para matar el test)
  // `reduce` no puede crear un Array tan grande y agota el heap
  // la recursion no puede anidar tantas llamadas y agota el stack
  // la solucion aritmetica es instantanea
  it.skip('debería retornar 50000000005000000000 para n = 100_000_00', () => {
    expect(sumOfNumbers(50000000005000000000)).toBe(500500);
  });
});
