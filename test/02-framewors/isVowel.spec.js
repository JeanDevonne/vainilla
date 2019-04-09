// Archivo `isVowel.spec.js`

const isVowel = require('./isVowel');

describe('isVowel()', () => {
  // Acá van los tests que describen el compartamiento de `isVowel()`
  it('debería devolver true para letra a', () => {
    // Acá invocamos `isVowel()` y verificamos el resultado
    if (isVowel('a') !== true) {
      console.error('✗ fail');
    } else {
      console.log('✓ ok');
    }
  });

  it('debería devolver false para letra b', () => {
    // Acá invocamos `isVowel()` y verificamos el resultado
    if (isVowel('b') !== false) {
      console.error('✗ fail');
    } else {
      console.log('✓ ok');
    }
  });
});