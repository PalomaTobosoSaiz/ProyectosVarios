import { Component, OnInit } from '@angular/core';
import { ChildActivationStart } from '@angular/router';
import { Personaje } from '../interfaces/dbz.interface';

import { DbzService} from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  
 
    nuevo: Personaje={
      nombre: 'Maestro roshi',
      poder:7500
    }

    // cambiarNombre(event:any){
    //   console.log(event);
    // }

    // agregarNuevoPersonaje(argumento : Personaje){
    //   this.personajes.push(argumento);
    // }

  constructor(){
  }
 
}
