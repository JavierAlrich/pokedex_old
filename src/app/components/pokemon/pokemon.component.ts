import { Component, OnInit } from '@angular/core';
import { PokemonSvcService } from 'src/app/services/pokemon-svc.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styles: [
  ]
})
export class PokemonComponent implements OnInit {

  pokemons: any[] = [];
  page: number = 1;
  totalPokemons: number;
  pic_sprite: string = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`; //png
  pic_moderno: string = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/`; //svg


  constructor(private pokemonSvc: PokemonSvcService) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons(){
    this.pokemonSvc.getAllPokemons(1, this.page-1).subscribe((data: any) => {
      console.log(this.page);
      
      this.totalPokemons = data.count;
      
      data.results.forEach(result => {
        this.pokemonSvc.getPokemonInfo(result.name).subscribe((dataInfo: any) => {
          this.pokemons.push(dataInfo);
          // console.log(this.pokemons);
        })
      })

    });
  }

}
