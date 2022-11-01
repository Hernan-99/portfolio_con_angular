import { Component, OnInit } from '@angular/core';
import { PrincipalService } from 'src/app/services/principal.service';

@Component({
  selector: 'app-card-editor',
  templateUrl: './card-editor.component.html',
  styleUrls: ['./card-editor.component.css'],
})
export class CardEditorComponent implements OnInit {
  titulo: string = '';
  descripcion: string = '';
  icono1: any = '';
  icono2: any = '';
  icono3: any = '';
  constructor(private principalService: PrincipalService) {}

  ngOnInit(): void {
    this.principalService.getDatos().subscribe((principal) => {
      this.titulo = principal.proyectos[4].titulo;
      this.descripcion = principal.proyectos[4].descripcion;
      this.icono1 = principal.proyectos[4].icono1;
      this.icono2 = principal.proyectos[4].icono2;
      this.icono3 = principal.proyectos[4].icono3;
    });
  }
}
