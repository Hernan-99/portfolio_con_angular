import { Component, OnInit } from '@angular/core';

import { PrincipalService } from 'src/app/services/principal.service';

import { ImagenesExperienciaLaboralService } from 'src/app/services/imagenes-experiencia-laboral.service';

@Component({
  selector: 'app-card-pc',
  templateUrl: './card-pc.component.html',
  styleUrls: ['./card-pc.component.css'],
})
export class CardPcComponent implements OnInit {
  // JSON PRINCIPAL
  cargo: string = '';
  inicio: string = '';
  fin: string = '';
  descripcion: string = '';

  // JSON IMGS
  imgArmadoPc: any = '';
  constructor(
    private principalService: PrincipalService,
    private imagenesExperienciaLaboralService: ImagenesExperienciaLaboralService
  ) {}

  ngOnInit(): void {
    this.principalService.getDatos().subscribe((principal) => {
      this.cargo = principal.armadoPc.cargo;
      this.inicio = principal.armadoPc.inicio;
      this.fin = principal.armadoPc.fin;
      this.descripcion = principal.armadoPc.descripcion;
    });
    this.imagenesExperienciaLaboralService.getImg().subscribe((imgs) => {
      this.imgArmadoPc = imgs.imgArmadoPc;
    });
  }
}
