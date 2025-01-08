interface Producto {
    nombre: string;
    precio: number;
    categoria: string;
  }
  
  const productos: Producto[] = [
    { nombre: "Laptop", precio: 1200, categoria: "Electrónica" },
    { nombre: "Camiseta", precio: 20, categoria: "Ropa" },
    { nombre: "Libro", precio: 15, categoria: "Educación" }
  ];
  
  productos[0].precio = 1000;
  productos[1].nombre = 50;