import { Component, OnInit } from '@angular/core';
import { PrincipalService } from 'src/app/services/principal.service';
import { ImagenesExperienciaLaboralService } from 'src/app/services/imagenes-experiencia-laboral.service';

@Component({
  selector: 'app-card-uni',
  templateUrl: './card-uni.component.html',
  styleUrls: ['./card-uni.component.css'],
})
export class CardUniComponent implements OnInit {
  imgUni: any = '';
  universidad: string = '';
  inicio: string = '';
  fin: string = '';

  constructor(
    private principalService: PrincipalService,
    private imagenesExperienciaLaboralService: ImagenesExperienciaLaboralService
  ) {}

  ngOnInit(): void {
    this.principalService.getDatos().subscribe((principal) => {
      this.universidad = principal.unlaLic.institucion;
      this.inicio = principal.unlaLic.inicio;
      this.fin = principal.unlaLic.fin;
    });

    this.imagenesExperienciaLaboralService.getImg().subscribe((imgs) => {
      this.imgUni = imgs.imgUnla;
    });
  }
}
