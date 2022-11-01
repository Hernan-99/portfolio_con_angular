import { Component, OnInit } from '@angular/core';
import { PrincipalService } from 'src/app/services/principal.service';

@Component({
  selector: 'app-card-card-form',
  templateUrl: './card-card-form.component.html',
  styleUrls: ['./card-card-form.component.css'],
})
export class CardCardFormComponent implements OnInit {
  titulo: string = '';
  descripcion: string = '';
  icono1: any = '';
  icono2: any = '';
  icono3: any = '';
  constructor(private principalService: PrincipalService) {}

  ngOnInit(): void {
    this.principalService.getDatos().subscribe((principal) => {
      this.titulo = principal.proyectos[1].titulo;
      this.descripcion = principal.proyectos[1].descripcion;
      this.icono1 = principal.proyectos[1].icono1;
      this.icono2 = principal.proyectos[1].icono2;
      this.icono3 = principal.proyectos[1].icono3;
    });
  }
}
