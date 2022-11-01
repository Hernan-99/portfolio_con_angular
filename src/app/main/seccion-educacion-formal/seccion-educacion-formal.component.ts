import { Component, OnInit } from '@angular/core';
import { PrincipalService } from 'src/app/services/principal.service';

@Component({
  selector: 'app-seccion-educacion-formal',
  templateUrl: './seccion-educacion-formal.component.html',
  styleUrls: ['./seccion-educacion-formal.component.css'],
})
export class SeccionEducacionFormalComponent implements OnInit {
  titulo: string = '';
  constructor(private principalService: PrincipalService) {}

  ngOnInit(): void {
    this.principalService.getDatos().subscribe((principal) => {
      this.titulo = principal.eduFormalTitulo;
    });
  }
}
