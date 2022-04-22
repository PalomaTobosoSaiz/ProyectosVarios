import { Component, OnInit } from '@angular/core';
import { VillanosPelis } from '../../interfaces/villanos.interfaces';
import { VillanosService } from '../../services/villanos.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [
  ]
})
export class ListadoComponent implements OnInit {

  villanos:  VillanosPelis[]=[];

  constructor(private villanosService: VillanosService) { }

  ngOnInit(): void {
    this.villanosService.getVillanos().subscribe(villanos => {
      this.villanos=villanos;

    });

  }

}
