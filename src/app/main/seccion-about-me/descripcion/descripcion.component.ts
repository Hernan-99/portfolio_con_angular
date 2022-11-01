import { Component, OnInit } from '@angular/core';

import { PrincipalService } from 'src/app/services/principal.service';

@Component({
  selector: 'app-descripcion',
  templateUrl: './descripcion.component.html',
  styleUrls: ['./descripcion.component.css'],
})
export class DescripcionComponent implements OnInit {
  tituloAcercaDe: string = '';
  descripcionAcercaDe: string = '';
  dPart1: string = '';
  digitalers: string = '';

  dPart2: string = '';
  ap: string = '';

  dPart3: string = '';
  udemy: string = '';

  dPart4: string = '';
  poloTic: string = '';

  dPart5: string = '';
  ispc: string = '';

  dPart6: string = '';
  constructor(private principalService: PrincipalService) {}

  ngOnInit(): void {
    this.principalService.getDatos().subscribe((principal) => {
      this.tituloAcercaDe = principal.acercaDe;
      // this.titulo_seccion = principal.acercaDeDescripcion;
      this.dPart1 = principal.dPart1;
      this.digitalers = principal.digitalers;

      this.dPart2 = principal.dPart2;
      this.ap = principal.ap;

      this.dPart3 = principal.dPart3;
      this.udemy = principal.udemy;

      this.dPart4 = principal.dPart4;
      this.poloTic = principal.poloTic;

      this.dPart5 = principal.dPart5;
      this.ispc = principal.ispc;

      this.dPart6 = principal.dPart6;
    });
  }
}
