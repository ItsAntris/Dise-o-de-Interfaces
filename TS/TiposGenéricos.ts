function primero<T>(arreglo: T[]): T {
    return arreglo[0];
  }
  
  const arregloNumeros = [1, 2, 3, 4];
  const primerNumero = primero(arregloNumeros);
  
  const arregloStrings = ["a", "b", "c"];
  const primerString = primero(arregloStrings);
  
  console.log(primerNumero);
  console.log(primerString);
  