import { Component, OnInit } from '@angular/core';
import { PrincipalService } from 'src/app/services/principal.service';

@Component({
  selector: 'app-seccion-experiencia-laboral',
  templateUrl: './seccion-experiencia-laboral.component.html',
  styleUrls: ['./seccion-experiencia-laboral.component.css'],
})
export class SeccionExperienciaLaboralComponent implements OnInit {
  titulo: string = '';
  constructor(private principalService: PrincipalService) {}

  ngOnInit(): void {
    this.principalService.getDatos().subscribe((principal) => {
      this.titulo = principal.expLabTitulo;
    });
  }
}
