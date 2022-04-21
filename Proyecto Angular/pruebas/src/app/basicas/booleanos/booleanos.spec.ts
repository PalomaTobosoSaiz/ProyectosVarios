import { usuarioIngresado } from "./booleanos";





describe('Pruebas de booleanos', () => {

it('Debe de retornar true', () => {

    const res=usuarioIngresado();


    expect (res).toBeTruthy(true);

    //En el caso de que sea false podemos ponerlo de este modo:
    //expect (res).not.toBeTruthy();
})

});