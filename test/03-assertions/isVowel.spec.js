// Archivo `isVowel.spec.js`

const isVowel = require('./isVowel');

const assertEqual = (value, expected) => {
  if (value !== expected) {
    throw new Error(`Expected '${value}' to equal '${expected}'`);
  }
};

describe('isVowel()', () => {
  // Acá van los tests que describen el compartamiento de `isVowel()`
  it('debería devolver true para letra a', () => {
    // Acá invocamos `isVowel()` y verificamos el resultado
    assertEqual(isVowel('a'), true);
  });

  it('debería devolver false para letra b', () => {
    // Acá invocamos `isVowel()` y verificamos el resultado
    assertEqual(isVowel('b'), false);
  });
});