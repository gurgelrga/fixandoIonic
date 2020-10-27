import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "folder",
    pathMatch: "full",
  },
  {
    path: "folder",
    loadChildren: () =>
      import("./folder/folder.module").then((m) => m.FolderPageModule),
  },
  {
    path: "listar-api",
    loadChildren: () =>
      import("./listar-api/listar-api.module").then(
        (m) => m.ListarApiPageModule
      ),
  },
  {
    path: 'modal-pessoas',
    loadChildren: () => import('./modal-pessoas/modal-pessoas.module').then(m => m.ModalPessoasPageModule)
  },
  {
    path: 'lista-api2',
    loadChildren: () => import('./lista-api2/lista-api2.module').then(m => m.ListaApi2PageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'listar-cadastroa',
    loadChildren: () => import('./listar-cadastroa/listar-cadastroa.module').then(m => m.ListarCadastroaPageModule)
  },

  {
    path: 'modal-edit',
    loadChildren: () => import('./modal-edit/modal-edit.module').then(m => m.ModalEditPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
