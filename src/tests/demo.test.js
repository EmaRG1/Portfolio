test('esta prueba no puede fallar', () => {

  //inicializacion
  const message1 = 'hola carnero';

  //estimulo
  const message2 = message1.trim();

  //observar el comportamiento esperado
  expect(message1).toBe(message2);
})