import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import { AlertController, NavController } from '@ionic/angular';

import { StarWarsService } from '../service/star-wars.service';

@Component({
  selector: 'app-lista-api2',
  templateUrl: './lista-api2.page.html',
  styleUrls: ['./lista-api2.page.scss'],
})
export class ListaApi2Page implements OnInit {
  public form: FormGroup;
  public estados: Array<any> = [
    {
      key: "AC",
      value: "Acre"
    },
    {
      key: "AL",
      value: "Alagoas"
    },
    { key: "AP", value: "Amapá" },
    { key: "AM", value: "Amazonas" },
    { key: "BA", value: "Bahia" },
    { key: "CE", value: "Ceará" },
    { key: "DF", value: "Distrito Federal" },
    { key: "ES", value: "Espírito Santo" },
    { key: "GO", value: "Goiás" },
    { key: "MA", value: "Maranhão" },
    { key: "MT", value: "Mato Grosso" },
    { key: "MS", value: "Mato Grosso do Sul" },
    { key: "MG", value: "Minas Gerais" },
    { key: "PA", value: "Pará" },
    { key: "PB", value: "Paraíba" },
    { key: "PR", value: "Paraná" },
    { key: "PE", value: "Pernambuco" },
    { key: "PI", value: "Piauí" },
    { key: "RJ", value: "Rio de Janeiro" },
    { key: "RN", value: "Rio Grande do Norte" },
    { key: "RS", value: "Rio Grande do Sul" },
    { key: "RO", value: "Rondônia" },
    { key: "RR", value: "Roraima" },
    { key: "SC", value: "Santa Catarina" },
    { key: "SP", value: "São Paulo" },
    { key: "SE", value: "Sergipe" },
    { key: "TO", value: "Tocantins" }
  ];
  constructor(public formBuilder: FormBuilder,
    public starWars: StarWarsService,
    public alertCtrl: AlertController,
    public navCtrl: NavController

  ) {
    this.form = this.formBuilder.group({
      nome: [""],
      sexo: [""],
      tipoForca: [""],
      dtNasc: [""],
      listaFilme: [""],
      estado: [""],
    });
  }
  ngOnInit() { }

  public async submitForm(): Promise<void> {
    // console.log(this.form.value);
    this.starWars.salvarCadastro(this.form.value);
  }
  async presentAlert(): Promise<void> {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Alert',

      message: 'Deseja Cadastrar +1 ou Listar?',
      buttons: [{
        text: '+1',
        role: 'cancel'
      },
      {
        text: 'Listar',
        handler: () => {
          this.navCtrl.navigateRoot('/listar-cadastroa');
        }
      }],
    });
    await alert.present();
  }

}
