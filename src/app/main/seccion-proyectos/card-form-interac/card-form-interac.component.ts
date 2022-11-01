import { Component, OnInit } from '@angular/core';
import { PrincipalService } from 'src/app/services/principal.service';
@Component({
  selector: 'app-card-form-interac',
  templateUrl: './card-form-interac.component.html',
  styleUrls: ['./card-form-interac.component.css'],
})
export class CardFormInteracComponent implements OnInit {
  titulo: string = '';
  descripcion: string = '';
  icono1: any = '';
  icono2: any = '';
  icono3: any = '';
  constructor(private principalService: PrincipalService) {}

  ngOnInit(): void {
    this.principalService.getDatos().subscribe((principal) => {
      this.titulo = principal.proyectos[3].titulo;
      this.descripcion = principal.proyectos[3].descripcion;
      this.icono1 = principal.proyectos[3].icono1;
      this.icono2 = principal.proyectos[3].icono2;
      this.icono3 = principal.proyectos[3].icono3;
    });
  }
}
