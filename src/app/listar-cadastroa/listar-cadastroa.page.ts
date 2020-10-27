import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { StarWarsService } from '../service/star-wars.service';
import { ModalEditPage } from '../modal-edit/modal-edit.page';
@Component({
  selector: 'app-listar-cadastroa',
  templateUrl: './listar-cadastroa.page.html',
  styleUrls: ['./listar-cadastroa.page.scss'],
})
export class ListarCadastroaPage implements OnInit {
  public peoples: Array<any> = [];
  constructor(
    public servStar: StarWarsService,
    public modal: ModalController,

  ) { }

  ngOnInit() {
    this.getPessoas();
  }
  public getPessoas() {
    this.servStar.getAll().then(res => {
      this.peoples = res;
    });
    console.log(this.peoples);
  }
  public async limparLista(): Promise<void> {
    await this.servStar.removeAll();
    this.getPessoas();
  }
  public async excluir(chave): Promise<void> {
    await this.servStar.excluirCadastro(chave);
    this.getPessoas();
  }
  async abrirEditar(chave) {
    const modal = await this.modal.create({
      component: ModalEditPage,

      componentProps: {
        id: chave,
      }

    });
    modal.onDidDismiss().then(async () => {
      await this.getPessoas();
    });
    return await modal.present();
  }

}
