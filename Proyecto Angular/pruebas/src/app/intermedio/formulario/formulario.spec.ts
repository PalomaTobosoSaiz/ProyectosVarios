import { FormularioRegistro } from "./formulario"
import { FormBuilder } from '@angular/forms';


describe( 'Formularios', () => {
let component: FormularioRegistro;

beforeEach( () => {
    component= new FormularioRegistro(new FormBuilder() );
});


it('Debe de crear un formulario con dos campos, email y password', () => {
    expect(component.form.contains('email') ).toBeTruthy();
    expect(component.form.contains('password') ).toBeTruthy();
});



xit('El email debe ser obligatorio', () => {
    const control = component.form.get('email');
    //control.setValue('pa');

    //expect(control.valid).toBeTruthy();
});

})