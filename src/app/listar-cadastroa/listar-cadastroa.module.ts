import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarCadastroaPageRoutingModule } from './listar-cadastroa-routing.module';

import { ListarCadastroaPage } from './listar-cadastroa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarCadastroaPageRoutingModule
  ],
  declarations: [ListarCadastroaPage]
})
export class ListarCadastroaPageModule {}
