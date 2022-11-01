import { Component, OnInit } from '@angular/core';
import { PrincipalService } from 'src/app/services/principal.service';

@Component({
  selector: 'app-card-rep-cel',
  templateUrl: './card-rep-cel.component.html',
  styleUrls: ['./card-rep-cel.component.css'],
})
export class CardRepCelComponent implements OnInit {
  titulo: string = '';
  descripcion: string = '';
  icono1: any = '';
  icono2: any = '';
  icono3: any = '';
  constructor(private principalService: PrincipalService) {}

  ngOnInit(): void {
    this.principalService.getDatos().subscribe((principal) => {
      this.titulo = principal.proyectos[2].titulo;
      this.descripcion = principal.proyectos[2].descripcion;
      this.icono1 = principal.proyectos[2].icono1;
      this.icono2 = principal.proyectos[2].icono2;
      this.icono3 = principal.proyectos[2].icono3;
    });
  }
}
