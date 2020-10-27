import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class GetApiService {
  public url: string = environment.baseUrl;
  constructor(public httpClient: HttpClient) { }

  public getPeoples(page: number): Observable<any> {
    return this.httpClient.get(this.url + "people/?page=" + page);
  }

  public getPeople(dadosPessoal: string): Observable<any> {
    return this.httpClient.get(dadosPessoal);
  }

  public getPlanets(page: number): Observable<any> {
    return this.httpClient.get(this.url + "planets/?page=" + page);
  }
  public getStarships(page: number): Observable<any> {
    return this.httpClient.get(this.url + "starships/?page=" + page);
  }
  public getVehicles(page: number): Observable<any> {
    return this.httpClient.get(this.url + "vehicles/?page=" + page);
  }
  public getFilms(): Observable<any> {
    return this.httpClient.get(this.url + "films/");
  }
  public getSpecies(page: number): Observable<any> {
    return this.httpClient.get(this.url + "species/?page=" + page);
  }
}
