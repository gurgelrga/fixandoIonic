import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage
  },
  {
    path: 'lista-api2',
    loadChildren: () => import('../lista-api2/lista-api2.module').then(m => m.ListaApi2PageModule)
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
export class TabsPageRoutingModule { }
