import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
@Injectable({
  providedIn: 'root'
})
export class StarWarsService {

  constructor(public storage: Storage) { }

  async salvarCadastro(dado) {

    // let dados = await this.getAll();
    //console.log(dados);
    // dados.push(dado);
    //this.storage.set("dados", JSON.stringify(dado));


    let temp = await this.getAll();
    if (!temp) {
      temp = [];
    }
    temp.push(dado);
    this.storage.set("dados", JSON.stringify(temp));

    /* .then((dados) => {
      dados.push(dado);
      console.log(dados);
      this.storage.set("dados", dados);
    });
 */
    console.log(temp);
  }

  public async getOne(id: number): Promise<any> {
    let dados = await this.getAll();
    const cadastroProcurado = dados.find((dado, idC) => {
      if (idC === id) {
        return dado;
      }
    });
    //console.log(cadastroProcurado);

    return cadastroProcurado;
    //console.log(teste);
    //console.log(comidas);
    //console.log(key);
  }

  public async update(dado, id: number): Promise<void> {
    let dados = await this.getAll();
    dados = dados.map((data, index) => {
      return id === index ? dado : data;
    });
    this.storage.set("dados", JSON.stringify(dados));
  }



  public async getAll() {
    let dados = await this.storage.get("dados");
    dados = JSON.parse(dados);
    return dados;
    //  return this.storage.get("dados").then((dados) => {
    //     return Promise.resolve(dados);
    //  });
  }
  public async removeAll(): Promise<void> {
    await this.storage.remove("dados");
  }
  public async excluirCadastro(key: number): Promise<void> {
    let dados = await this.getAll();
    dados.splice(key, 1);
    await this.storage.set("dados", JSON.stringify(dados));
  }
}
