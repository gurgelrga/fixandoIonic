import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaApi2PageRoutingModule } from './lista-api2-routing.module';

import { ListaApi2Page } from './lista-api2.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    ListaApi2PageRoutingModule
  ],
  declarations: [ListaApi2Page]
})
export class ListaApi2PageModule { }
