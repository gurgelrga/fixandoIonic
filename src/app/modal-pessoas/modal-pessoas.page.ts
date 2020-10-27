import { Component, Input, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { GetApiService } from "src/app/service/get-api.service";

@Component({
  selector: "app-modal-pessoas",
  templateUrl: "./modal-pessoas.page.html",
  styleUrls: ["./modal-pessoas.page.scss"],
})
export class ModalPessoasPage implements OnInit {
  @Input() url: string;
  dados: Array<any> = [];
  constructor(
    public     modal: ModalController,
     public apiGet: GetApiService) {}

  ngOnInit() {
   this.getDados(this.url);
  }
  getDados(url) {
    this.apiGet.getPeople(url).subscribe((response) => {
      console.log(response);
      this.dados = response;
      console.log(this.dados);
    });
  }
  fecharModal() {
    this.modal.dismiss();
 }
}
