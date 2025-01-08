var _a, _b, _c;
var usuario = {
    perfil: {
        nombre: 'Juan',
        direccion: {
            calle: 'Av. Principal',
            ciudad: 'Sevilla'
        }
    }
};

var nombreUsuario = (_a = usuario.perfil) === null || _a === void 0 ? void 0 : _a.nombre;
console.log(nombreUsuario); // Imprime 'Juan'
var codigoPostal = (_c = (_b = usuario.perfil) === null || _b === void 0 ? void 0 : _b.direccion) === null || _c === void 0 ? void 0 : _c.codigoPostal;
console.log(codigoPostal);