import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalPessoasPageRoutingModule } from './modal-pessoas-routing.module';

import { ModalPessoasPage } from './modal-pessoas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalPessoasPageRoutingModule
  ],
  declarations: [ModalPessoasPage]
})
export class ModalPessoasPageModule {}
