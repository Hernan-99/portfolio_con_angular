import { Component, OnInit } from '@angular/core';

import { PrincipalService } from 'src/app/services/principal.service';
import { ImagenesExperienciaLaboralService } from 'src/app/services/imagenes-experiencia-laboral.service';
@Component({
  selector: 'app-card-ventas',
  templateUrl: './card-ventas.component.html',
  styleUrls: ['./card-ventas.component.css'],
})
export class CardVentasComponent implements OnInit {
  // JSON PRINCIPAL
  cargo: string = '';
  inicio: string = '';
  fin: string = '';
  descripcion: string = '';

  // JSON IMGS
  imgVentas: any = '';
  constructor(
    private principalService: PrincipalService,
    private imagenesExperienciaLaboralService: ImagenesExperienciaLaboralService
  ) {}

  ngOnInit(): void {
    this.principalService.getDatos().subscribe((principal) => {
      this.cargo = principal.ventas.cargo;
      this.inicio = principal.ventas.inicio;
      this.fin = principal.ventas.fin;
      this.descripcion = principal.ventas.descripcion;
    });
    this.imagenesExperienciaLaboralService.getImg().subscribe((imgs) => {
      this.imgVentas = imgs.imgVentas;
    });
  }
}
