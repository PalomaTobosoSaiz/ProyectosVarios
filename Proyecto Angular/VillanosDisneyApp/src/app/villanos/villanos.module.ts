import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';

import { VillanosRoutingModule } from './villanos-routing.module';
import { MaterialModule } from '../material/material.module';
import {MatToolbarModule} from '@angular/material/toolbar';

import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { VillanoComponent } from './pages/villano/villano.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';



@NgModule({
  declarations: [
    AgregarComponent,
    BuscarComponent,
    VillanoComponent,
    HomeComponent,
    ListadoComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    MatToolbarModule,
    VillanosRoutingModule
  ]
})
export class VillanosModule { }
