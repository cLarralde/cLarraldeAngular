import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.scss',
})
export class CharacterListComponent implements OnInit {
  personaje = {
    retrato: "img/v.jpg",
    nombre: 'Valerie/Vincent (V)',
    edad: 24,
    faccion: 'Merc',
    estatus:
      'Fallecido (Asesinado por tener implantado el engrama de Johnny Silverhand)',
    rol: 'Personaje principal',
  };
  
  personajeDos = {
    retrato: "img/Johnny.jpg",
    nombre: 'Johnny Silverhand',
    edad: '34 (Fisico) - 88 (Engrama)',
    faccion: 'Samurai',
    estatus: 'Fallecido (Asesinado por Adam Smasher)',
    rol: 'Personaje principal',
  };

  personajeTres = {
    retrato: "img/songbird.jpg",
    nombre: 'Song So Mi (Songbird)',
    edad: 31,
    faccion: 'FIA',
    estatus:
      'Desconocido (1.Asesinada por V o por la FIA. 2.Enviada a la Luna)',
    rol: 'Personaje principal',
  };
  personajeCuatro = {
    retrato: "img/evelyn.jpg",
    nombre: 'Evelyn Parker',
    edad: 'Desconocida',
    faccion: 'MOX',
    estatus: 'Fallecida (Suicidio)',
    rol: 'Personaje Secundario',
  };
  constructor() {}
  ngOnInit(): void {}
}
