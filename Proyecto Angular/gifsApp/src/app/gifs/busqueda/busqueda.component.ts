import { Component, ElementRef, ViewChild} from '@angular/core';
import { GifsServicesService} from '../services/gifs-services.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent {

  @ViewChild('txtBuscar')txtBuscar!:ElementRef<HTMLInputElement>;

    constructor(private gifsService: GifsServicesService){

    }
  buscar(){
    const valor= this.txtBuscar.nativeElement.value;

    if(valor.trim().length === 0){
      return;
    }
    this.gifsService.buscarGifs(valor);
    this.txtBuscar.nativeElement.value=' ';
  }

}
