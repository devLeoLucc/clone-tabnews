const calculadora = require("../models/calculadora.js");

test("somar '2 + 2' deveria retornar 4", () => {
  const resultado = calculadora.somar(2, 2);
  expect(resultado).toBe(4);
});

test("somar 'banana' + 4 deveria retornar 'Erro'", () => {
  const resultado = calculadora.somar("banana", 4);
  expect(resultado).toBe("Erro");
});
