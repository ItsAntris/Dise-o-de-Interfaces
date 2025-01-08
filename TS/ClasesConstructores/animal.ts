class Animal {
    nombre: string;
    especie: string;
  
    constructor(nombre: string, especie: string) {
      this.nombre = nombre;
      this.especie = especie;
    }
  }
  
  const miAnimal = new Animal("Leo", "León");
  console.log(`Nombre: ${miAnimal.nombre}, Especie: ${miAnimal.especie}`);
  