import { Component } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //i18nSelect
  nombre: string = 'paloma';
  genero: string = 'femenino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'fenenino': 'invitarla'

  }

  //i18nPlural

  clientes: string[] = ['mari', 'pedro', 'fausto'];
  clientesMapa = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'no tenemos un cliente esperando',
    '=2': 'no tenemos dos clientes esperando',
    '=3': 'no tenemos tres clientes esperando',
    'other': 'tenemos # clientes esperando'
  }


  cambiarCliente() {
    this.nombre = 'Melissa';
    this.genero = 'femenino'

  }
  borrarCliente() {

    this.clientes.pop();

  }

}
