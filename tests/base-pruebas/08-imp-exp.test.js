import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('Pruebas en 08-imp-exp', () => {
    test('getHeroeById debe retornar un heroe por ID', () => {
        const id = 1;

        const hero = getHeroeById(id);
        //console.log(hero);
        
        expect(hero).toEqual({id: 1, name: 'Batman', owner: 'DC'})

    });

    test('getHeroeById debe retornar undefined si no existe id', () => {
        const id = 100;

        const hero = getHeroeById(id);
        //console.log(hero);
        
        expect(hero).toBeFalsy();

    });

    // Tarea:
    // Debe de retornar un arreglo con los heroes de DC
    // Length === 3
    // toEqual al arreglo

    // debe de retornar un arreglo con los heroes de Marvel
    // length === 2

    test('getHeroeByOwner debe retornar los owners DC',()=>{
        const ownerDC = 'DC';
        const heroesDC = getHeroesByOwner(ownerDC);
        expect(heroesDC.length).toBe(3);
        expect(heroesDC).toEqual(heroesDC.filter( (heroe) => heroe.owner === ownerDC ));
        
    });

    test('getHeroeByOwner debe retornar los owners Marvel',()=>{
        const ownerMarvel = 'Marvel'
        const heroesMarvel = getHeroesByOwner(ownerMarvel);
        console.log(heroesMarvel);
        expect(heroesMarvel.length).toBe(2);
        expect(heroesMarvel).toEqual(heroesMarvel.filter( (heroe) => heroe.owner === ownerMarvel ));
        
    });

})