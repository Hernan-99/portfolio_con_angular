import { Component, OnInit } from '@angular/core';
import { PrincipalService } from 'src/app/services/principal.service';
import { ImagenesExperienciaLaboralService } from 'src/app/services/imagenes-experiencia-laboral.service';

@Component({
  selector: 'app-card-secu',
  templateUrl: './card-secu.component.html',
  styleUrls: ['./card-secu.component.css'],
})
export class CardSecuComponent implements OnInit {
  imgSecu: any = '';
  secundaria: string = '';
  acronimo: string = '';
  inicio: string = '';
  fin: string = '';
  titulo: string = '';

  constructor(
    private principalService: PrincipalService,
    private imagenesExperienciaLaboralService: ImagenesExperienciaLaboralService
  ) {}

  ngOnInit(): void {
    this.principalService.getDatos().subscribe((principal) => {
      this.secundaria = principal.idoSec.institucion;
      this.inicio = principal.idoSec.inicio;
      this.acronimo = principal.idoSec.acronimo;
      this.fin = principal.idoSec.fin;
      this.titulo = principal.idoSec.titulo;
    });

    this.imagenesExperienciaLaboralService.getImg().subscribe((imgs) => {
      this.imgSecu = imgs.imgIdo;
    });
  }
}
