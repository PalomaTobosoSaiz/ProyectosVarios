import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { VillanosPelis } from '../../interfaces/villanos.interfaces';
import { VillanosService } from '../../services/villanos.service';
import { VillanosRoutingModule } from '../../villanos-routing.module';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  termino:string ='';
  villanos: VillanosPelis[]=[];

  villanoSeleccionado:VillanosPelis | undefined;

  constructor(private villanosService: VillanosService) { }

  ngOnInit(): void {
  }

  buscando(){
    this.villanosService.getSugerencias(this.termino.trim())
    .subscribe(villanos=> this.villanos=villanos);
  }

  opcionSeleccionada(event:MatAutocompleteSelectedEvent){
    //Buscar la validacion si es un string vacio
    if(!event.option.value){
      this.villanoSeleccionado=undefined;
      return;
    }

    const villano:VillanosPelis=event.option.value;
    this.termino=villano.villanos;


    this.villanosService.getVillanosPorId(villano.id!)
    .subscribe(villano => this.villanoSeleccionado=villano);

  }
}
