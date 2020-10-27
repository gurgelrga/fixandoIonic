import { Component, Input, OnInit } from '@angular/core';
import { StarWarsService } from '../service/star-wars.service';
import { FormGroup, FormBuilder, ReactiveFormsModule } from "@angular/forms";
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-edit',
  templateUrl: './modal-edit.page.html',
  styleUrls: ['./modal-edit.page.scss'],
})
export class ModalEditPage implements OnInit {
  @Input() public id: number;
  public form: FormGroup;

  public estados = [
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

  constructor(
    public star: StarWarsService,
    public formBuilder: FormBuilder,
    public modal: ModalController,
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

  async ngOnInit() {
    this.editOne();
  }
  public modalDismiss(): void {
    this.modal.dismiss();
  }

  public async editOne(): Promise<void> {
    //console.log(this.id);
    const tempp = await this.star.getOne(this.id);
    console.log(tempp);
    this.form.patchValue(tempp);;
  }

  submitForm() {

    console.log(this.form.value);
    this.star.update(this.form.value, this.id);
    this.modalDismiss();
  }


}
