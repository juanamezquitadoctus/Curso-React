// Desestructuración
// Asignación Desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
    rango: 'Soldado'
};

// const { edad, clave, nombre, } = persona;

// console.log( nombre );
// console.log( edad );
// console.log( clave );

const userContext = ({ clave, nombre, edad, rango = 'Capitán',}) => {
    
    // console.log( nombre, edad, rango );

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.34234,
            lng: -12.3243
        }
    }

}

const { nombreClave, anios, latlng:{ lat, lng } } = userContext( persona );

console.log( nombreClave, anios );
console.log( lat, lng );