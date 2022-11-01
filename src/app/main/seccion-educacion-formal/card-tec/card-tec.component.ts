import { Component, OnInit } from '@angular/core';

import { PrincipalService } from 'src/app/services/principal.service';

import { ImagenesExperienciaLaboralService } from 'src/app/services/imagenes-experiencia-laboral.service';

@Component({
  selector: 'app-card-tec',
  templateUrl: './card-tec.component.html',
  styleUrls: ['./card-tec.component.css'],
})
export class CardTecComponent implements OnInit {
  imgTec: any = '';
  tecnicatura: string = '';
  inicio: string = '';
  fin: string = '';
  constructor(
    private principalService: PrincipalService,
    private imagenesExperienciaLaboralService: ImagenesExperienciaLaboralService
  ) {}

  ngOnInit(): void {
    this.principalService.getDatos().subscribe((principal) => {
      this.tecnicatura = principal.ispcTec.institucion;
      this.inicio = principal.ispcTec.inicio;
      this.fin = principal.ispcTec.fin;
    });

    this.imagenesExperienciaLaboralService.getImg().subscribe((imgs) => {
      this.imgTec = imgs.imgIspc;
    });
  }
}
