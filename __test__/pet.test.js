const Pet = require('../src/pet'); // this is the file we need to pull in the code exported from another file

describe('constructor', () => {
    it('returns an object', () => {
        expect(new Pet('Fido')).toBeInstanceOf(Object);
    });
});