import { usContext } from '../../src/base-pruebas/06-deses-obj';

describe('Pruebas en 06-deses-obj', () => {

    test('usContext debe retornar un objeto', () => {

        const clave = 'Juan Camilo';
        // const years = 32;

        const user = usContext({ clave });

        expect( user ).toEqual({
            nombreClave: clave,
            // anios: years,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        });

    });

});