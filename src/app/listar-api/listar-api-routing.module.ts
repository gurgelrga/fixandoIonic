import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarApiPage } from './listar-api.page';

const routes: Routes = [
  {
    path: '',
    component: ListarApiPage
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarApiPageRoutingModule { }
