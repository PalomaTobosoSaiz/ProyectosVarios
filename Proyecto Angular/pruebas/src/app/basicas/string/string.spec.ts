import { mensaje } from "./string";

//Agrupar pruebas
describe('Pruebas de Strings', () => {
    it('Debe de regresar un string', () =>{
        const resp= mensaje('Paloma');

        expect(typeof resp).toBe('string');


    });
    
    it('Debe de retornar un saludo con el nombre enviado', () => {
        
        const nombre='Paloma';
        const resp= mensaje( nombre );

        expect( resp ).toContain( nombre ) ;


    });



});

//para probar pruebas
// it('Debe de regresar un string');
// it('Debe de contener un nombre');