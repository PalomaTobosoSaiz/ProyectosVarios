import {incrementar} from './numeros';

describe ('Pruebas de numeros', () => {



    it('Debe retornar 100, si el numero ingresado es mayor que 100', () => {
      const res= incrementar(300); 
        expect(res).toBe(100); 

    });
    it('Debe retornar el numero ingresado + 1, si no es mayor que 100', () => {
      const res= incrementar(50); 
        expect(res).toBe(51); 

    });
});