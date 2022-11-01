import { Component, OnInit } from '@angular/core';
import { PrincipalService } from 'src/app/services/principal.service';

@Component({
  selector: 'app-card-trecafe',
  templateUrl: './card-trecafe.component.html',
  styleUrls: ['./card-trecafe.component.css'],
})
export class CardTrecafeComponent implements OnInit {
  titulo: string = '';
  descripcion: string = '';
  icono1: any = '';
  icono2: any = '';
  icono3: any = '';
  constructor(private principalService: PrincipalService) {}

  ngOnInit(): void {
    this.principalService.getDatos().subscribe((principal) => {
      this.titulo = principal.proyectos[0].titulo;
      this.descripcion = principal.proyectos[0].descripcion;
      this.icono1 = principal.proyectos[0].icono1;
      this.icono2 = principal.proyectos[0].icono2;
      this.icono3 = principal.proyectos[0].icono3;
    });
  }
}
