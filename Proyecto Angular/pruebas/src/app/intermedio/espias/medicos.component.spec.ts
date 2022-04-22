import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';


describe('MedicosComponent', () => {

    let componente: MedicosComponent;
    const servicio= new MedicosService(null);

    beforeEach( () => {
        componente= new MedicosComponent(servicio);
        
    });


    it('Init: Debe de cargar los medicos', () => {

        const medicos=['medico1', 'medico2', 'medico3']; 
        //instrucion para hacer peticiones falsas
        spyOn(servicio, 'getMedicos').and.callFake(() =>{
            return Observable.from([ medicos ]);
        });

        componente.ngOnInit();

        expect(componente.medicos.length).toBeGreaterThan(0);
   
    });


    it('Debe de llamar al servidor para agregar un medico', () => {

       const espia= spyOn(servicio, 'agregarMedico').and.callFake(medico => {
            return Observable.empty();
        });

        componente.agregarMedico();


        expect(espia).toHaveBeenCalled();
    });
    it('Debe agregar un nuevo medico al arreglo de medicos', () => {

       spyOn(servicio, 'agregarMedico')
       .and.returnValue(Observable.from( [medico] ) );

       componente.agregarMedico();
    });

});
