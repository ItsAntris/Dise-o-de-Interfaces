let texto: string = "hola";
texto = 10;

let numero: number = 90;
numero = "hola";

let tOf: boolean = false;
tOf = "hola";

let arreglo: number[] = [1, 2, 3];
arreglo = "hola";

let tupla: [string, number] = ["texto", 42];
tupla = [42, "texto"];

enum Color {
  Rojo,
  Verde,
  Azul
}
let colorFavorito: Color = Color.Rojo;
colorFavorito = "rojo";

let cualquiera: any = "puede ser cualquier cosa";
cualquiera = 42;

let sinValor: void;
sinValor = undefined;
sinValor = null;

let nulo: null = null;
nulo = undefined;

let indefinido: undefined = undefined;
indefinido = null;

function errorFatal(): never {
  throw new Error("Esto siempre falla");
}
let nunca: never;
nunca = errorFatal();
nunca = 42;