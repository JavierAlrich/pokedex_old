import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonSvcService {

  constructor(private http: HttpClient) { }

  private baseUrl: string = 'https://pokeapi.co/api/v2/pokemon';

  getAllPokemons(limit: number, offset: number){
    return this.http.get(`${this.baseUrl}?limit=${limit}&offset=${offset}`);
  }

  getPokemonInfo(name: string){
    return this.http.get(`${this.baseUrl}/${name}/`);
  }

}
