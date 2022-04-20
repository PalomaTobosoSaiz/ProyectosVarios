import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {
  nombreLower: string='paloma';
  nombreUpper: string='PALOMA';
  nombreCompleto: string='PaLOma toBoSO';


  fecha: Date= new Date(); //el dia de hoy 

}
