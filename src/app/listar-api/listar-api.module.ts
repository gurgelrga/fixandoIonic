import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarApiPageRoutingModule } from './listar-api-routing.module';

import { ListarApiPage } from './listar-api.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarApiPageRoutingModule
  ],
  declarations: [ListarApiPage]
})
export class ListarApiPageModule {}
