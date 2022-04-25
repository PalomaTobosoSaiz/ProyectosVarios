import { Component,Input} from '@angular/core';
import {VillanosPelis} from '../../interfaces/villanos.interfaces';

@Component({
  selector: 'app-villano-tarjeta',
  templateUrl: './villano-tarjeta.component.html',
  styles: [`
  mat-card{
    margin-top: 20px
  }
  `]
})
export class VillanoTarjetaComponent {
  @Input() villano!: VillanosPelis;

 

}
