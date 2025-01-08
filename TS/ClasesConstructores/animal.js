var Animal = /** @class */ (function () {
    function Animal(nombre, especie) {
        this.nombre = nombre;
        this.especie = especie;
    }
    return Animal;
}());
var miAnimal = new Animal("Leo", "León");
console.log("Nombre: ".concat(miAnimal.nombre, ", Especie: ").concat(miAnimal.especie));
