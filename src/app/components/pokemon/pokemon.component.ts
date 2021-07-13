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
  pic_sprite: string = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`; //png
  pic_moderno: string = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/`; //svg


  constructor(private pokemonSvc: PokemonSvcService) { }

  ngOnInit(): void {
    this.pokemonSvc.getAllPokemons().subscribe((data: any) => {
      data.results.forEach(result => {
        this.pokemonSvc.getPokemonInfo(result.name).subscribe((dataInfo: any) => {
          this.pokemons.push(dataInfo);
          console.log(this.pokemons);
        })
      })
    });
  }

}
