import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { VillanosPelis, Publisher } from '../../interfaces/villanos.interfaces';
import { VillanosService } from '../../services/villanos.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {

    publishers=[
      {
        id:'Disney',
        desc:'Disney- Studios'
      },
      {
        id:'Pixar',
        desc:'Disney- Pixar'
      }

    ];

villano: VillanosPelis={
  villanos:'',
  alter_ego:'',
  characters:'',
  first_appearance:'',
  publisher:Publisher.Disney,
  alt_img:''

} 

  constructor(private villanosServices: VillanosService) { }

  ngOnInit(): void {
  }

  guardar(){
    if(this.villano.villanos.trim().length===0){
      return;
    }

    this.villanosServices.agregarVillano(this.villano)
    .subscribe(resp=> {
      console.log('Respuesta',resp);
    })
  }

}
