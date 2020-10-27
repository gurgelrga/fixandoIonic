import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarCadastroaPage } from './listar-cadastroa.page';

const routes: Routes = [
  {
    path: '',
    component: ListarCadastroaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarCadastroaPageRoutingModule {}
