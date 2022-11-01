import { Component, OnInit } from '@angular/core';
import { PrincipalService } from 'src/app/services/principal.service';

@Component({
  selector: 'app-seccion-educacion-complementaria',
  templateUrl: './seccion-educacion-complementaria.component.html',
  styleUrls: ['./seccion-educacion-complementaria.component.css'],
})
export class SeccionEducacionComplementariaComponent implements OnInit {
  titulo: string = '';
  constructor(private principalService: PrincipalService) {}

  ngOnInit(): void {
    this.principalService.getDatos().subscribe((principal) => {
      this.titulo = principal.eduCompleTitulo;
    });
  }
}
