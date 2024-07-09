import { Component, OnInit } from '@angular/core';
import { Character } from './character';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.scss',
})
export class CharacterListComponent implements OnInit {
  personajes: Character[] = [
    {
      retrato: 'img/v.jpg',
      nombre: 'Valerie/Vincent (V)',
      edad: 24,
      faccion: 'Merc',
      estatus:
        'Fallecido (Asesinado por tener implantado el engrama de Johnny Silverhand)',
      rol: 'Personaje principal',
      disponible:true,
      principal:true,
    },
    {
      retrato: 'img/Johnny.jpg',
      nombre: 'Johnny Silverhand',
      edad: 88,
      faccion: 'Samurai',
      estatus: 'Fallecido (Asesinado por Adam Smasher)',
      rol: 'Personaje principal',
      disponible:true,
      principal:true,
    },
    {
      retrato: 'img/songbird.jpg',
      nombre: 'Song So Mi (Songbird)',
      edad: 31,
      faccion: 'FIA',
      estatus:
        'Desconocido (1.Asesinada por V o por la FIA. 2.Enviada a la Luna)',
      rol: 'Personaje principal',
      disponible:true,
      principal:true,
    },

    {
      retrato: 'img/evelyn.jpg',
      nombre: 'Evelyn Parker',
      edad: 34,
      faccion: 'MOX',
      estatus: 'Fallecida (Suicidio)',
      rol: 'Personaje Secundario',
      disponible:true,
      principal:false,
    },
  ];

  constructor() {}
  ngOnInit(): void {}
}
