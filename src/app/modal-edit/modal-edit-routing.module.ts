import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalEditPage } from './modal-edit.page';

const routes: Routes = [
  {
    path: '',
    component: ModalEditPage
  },
  {
    path: 'listar-cadastroa',
    loadChildren: () => import('../listar-cadastroa/listar-cadastroa.module').then(m => m.ListarCadastroaPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalEditPageRoutingModule { }
