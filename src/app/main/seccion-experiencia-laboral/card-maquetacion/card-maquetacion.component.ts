import { Component, OnInit } from '@angular/core';

import { PrincipalService } from 'src/app/services/principal.service';

import { ImagenesExperienciaLaboralService } from 'src/app/services/imagenes-experiencia-laboral.service';

@Component({
  selector: 'app-card-maquetacion',
  templateUrl: './card-maquetacion.component.html',
  styleUrls: ['./card-maquetacion.component.css'],
})
export class CardMaquetacionComponent implements OnInit {
  // JSON PRINCIPAL
  cargo: string = '';
  inicio: string = '';
  fin: string = '';
  descripcion: string = '';

  // JSON IMGS
  imgMaquetacion: any = '';

  constructor(
    private principalService: PrincipalService,
    private imagenesExperienciaLaboralService: ImagenesExperienciaLaboralService
  ) {}

  ngOnInit(): void {
    this.principalService.getDatos().subscribe((principal) => {
      this.cargo = principal.maquetacion.cargo;
      this.inicio = principal.maquetacion.inicio;
      this.fin = principal.maquetacion.fin;
      this.descripcion = principal.maquetacion.descripcion;
    });
    this.imagenesExperienciaLaboralService.getImg().subscribe((imgs) => {
      this.imgMaquetacion = imgs.imgMaquetacion;
    });
  }
}
