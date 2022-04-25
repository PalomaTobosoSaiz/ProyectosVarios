import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VillanosPelis } from '../../interfaces/villanos.interfaces';
import {switchMap} from 'rxjs/operators'
import { VillanosService } from '../../services/villanos.service';

@Component({
  selector: 'app-villano',
  templateUrl: './villano.component.html',
  styles: [`
  img{
    width:100%;
    border-radiux:5px;
  }
  `]
})
export class VillanoComponent implements OnInit {

  villano!: VillanosPelis;

  //id del villano y se muestra por consola

  constructor(private activatedRoute: ActivatedRoute,
              private villanoService: VillanosService,
              private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap(( {id}) => this.villanoService.getVillanosPorId(id))
    )
    .subscribe(villano=> this.villano= villano);
  }

  regresar(){
    this.router.navigate(['/villanos/listado']);
  }

}
