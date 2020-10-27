import { Component, OnInit } from "@angular/core";
import { PopoverController, ModalController } from "@ionic/angular";
import { GetApiService } from "src/app/service/get-api.service";
import { ModalPessoasPage } from "../modal-pessoas/modal-pessoas.page";
import { PropoverComponent } from "../propover/propover.component";

@Component({
  selector: "app-listar-api",
  templateUrl: "./listar-api.page.html",
  styleUrls: ["./listar-api.page.scss"],
})
export class ListarApiPage implements OnInit {
  public pessoas: Array<any> = [];
  public planetas: Array<any> = [];
  public naves: Array<any> = [];
  public veiculos: Array<any> = [];
  public filmes: Array<any> = [];
  public especies: Array<any> = [];

  public next: string;
  public count: number;

  public pagesPe: number = 1;
  public pagesPl: number = 1;
  public pagesN: number = 1;
  public pagesS: number = 1;
  public pagesV: number = 1;

  constructor(
    public getApi: GetApiService,
    public modal: ModalController,
    public props: PopoverController,
  ) { }

  ngOnInit() {
    this.buscarPessoas(this.pagesPe);
    this.buscarFilme();
    this.buscarNaves(this.pagesN);
    this.buscarPlanetas(this.pagesPl);
    this.buscarSpecie(this.pagesS);
    this.buscarVeiculo(this.pagesV);

  }
  async abriModal(url: string) {
    const modal = await this.modal.create({
      component: ModalPessoasPage,
      componentProps: { url },
    });
    return await modal.present();
  }
  public buscarPessoas(pagina: number) {
    this.getApi.getPeoples(pagina).subscribe((response) => {
      this.pessoas = response.results;
      this.next = response.next;
      this.count = response.count;
      //console.log(this.next);
    });
    return this.pessoas;
  }
  public buscarPlanetas(pagina: number) {
    this.getApi.getPlanets(pagina).subscribe((response) => {
      this.planetas = response.results;
      this.next = response.next;
      this.count = response.count;
      //console.log(this.next);
    });
  }
  public buscarNaves(pagina: number) {
    this.getApi.getStarships(pagina).subscribe((response) => {
      this.naves = response.results;
      this.next = response.next;
      this.count = response.count;
      //console.log(this.next);
    });
  }
  public buscarSpecie(pagina: number) {
    this.getApi.getSpecies(pagina).subscribe((response) => {
      this.especies = response.results;
      this.next = response.next;
      this.count = response.count;
      //console.log(this.next);
    });
  }
  public buscarVeiculo(pagina: number) {
    this.getApi.getVehicles(pagina).subscribe((response) => {
      this.veiculos = response.results;
      this.next = response.next;
      this.count = response.count;
      //console.log(this.next);
    });
  }
  public buscarFilme(): void {
    this.getApi.getFilms().subscribe((response) => {
      this.filmes = response.results;
      //console.log(this.next);
    });
  }
  proximaPagina(): void {
    this.buscarPessoas(++this.pagesPe);
    this.buscarNaves(++this.pagesN);
    this.buscarPlanetas(++this.pagesPl);
    this.buscarSpecie(++this.pagesS);
    this.buscarVeiculo(++this.pagesV);
  }

  anteriorPagina(): void {
    this.buscarPessoas(--this.pagesPe);

    this.buscarNaves(--this.pagesN);
    this.buscarPlanetas(--this.pagesPl);
    this.buscarSpecie(--this.pagesS);
    this.buscarVeiculo(--this.pagesV);
  }

  verificarSeTemProximaPagina(): boolean {
    if (this.next === null) {
      return false;
    } else {
      return true;
    }
  }
  //async presentPopover(event: any) {
  //   let popover = await this.props.create({
  //    component: PropoverComponent,
  //    translucent: true,
  //     event,
  //   });
  //  return await popover.present();

  //}
}
