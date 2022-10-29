// pet constructor function
//NOTE:constructor functions are functions, and are not objects themselves.
//When using a constructor function, we have to use the keyword this
function Pet(name) {
    this.name = name;
    this.age = 0;
    this.growUp = function () {
        this.age += 1;
    }
}

const pet = new Pet('Fido');
console.log(pet);







module.exports = Pet; //file that been exposed (make it available to use outside the file it written init)