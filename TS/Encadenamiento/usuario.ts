const usuario = {
    perfil: {
      nombre: 'Juan',
      direccion: {
        calle: 'Av. Principal',
        ciudad: 'Sevilla'
      }
    }
  };
  
  const nombreUsuario = usuario.perfil?.nombre;
  console.log(nombreUsuario);
  
  const codigoPostal = usuario.perfil?.direccion?.codigoPostal;
  console.log(codigoPostal);
  