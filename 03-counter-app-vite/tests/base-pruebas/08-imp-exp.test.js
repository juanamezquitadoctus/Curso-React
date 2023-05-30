import { getHeroeById } from '../../src/base-pruebas/08-imp-exp';
import { heroes } from '../../src/data/heroes';
import { getHeroesByOwner } from '../../src/base-pruebas/08-imp-exp';

describe('Pruebas en 08-imp-exp', () => {

    test('getHeroeById debe de retornar un Heroe por ID', () => {

        const id = 1;
        const hero = getHeroeById( id );

        expect( hero ).toEqual({ id: 1, name: 'Batman', owner: 'DC'});

    });

    test('getHeroeById debe de retornar undefined si no existe', () => {

        const id = 100;
        const hero = getHeroeById( id );

        expect( hero ).toBeFalsy();

    });

    test('getHeroesByOwner debe de retornar 3 Arreglos', () => {

        const owner = 'DC';        
        const heroesDC = getHeroesByOwner( owner );

        expect( heroesDC ).toHaveLength(3);

        expect( heroesDC.length ).toBe(3);

        expect ( heroesDC ).toEqual([
            {id: 1, name: 'Batman', owner: 'DC'},
            {"id": 3, "name": "Superman", "owner": "DC"},
            {"id": 4, "name": "Flash", "owner": "DC"}
        ]);

        expect( heroesDC ).toEqual( heroesDC.filter( (heroe) => heroe.owner === owner ) );

    });

    test('getHeroesByOwner debe de retornar 2 Arreglos', () => {

        const owner = 'Marvel';        
        const heroesMarvel = getHeroesByOwner( owner );

        expect( heroesMarvel ).toHaveLength(2);

        expect( heroesMarvel.length ).toBe(2);

    });

});