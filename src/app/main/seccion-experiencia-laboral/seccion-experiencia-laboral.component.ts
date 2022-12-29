import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/models/experiencia';
import { ExperienciaService } from 'src/app/services/experiencia.service';

@Component({
  selector: 'app-seccion-experiencia-laboral',
  templateUrl: './seccion-experiencia-laboral.component.html',
  styleUrls: ['./seccion-experiencia-laboral.component.css'],
})
export class SeccionExperienciaLaboralComponent implements OnInit {
  public experiencias: Experiencia[] = [];

  constructor(private datosExp: ExperienciaService) {}

  ngOnInit(): void {
    this.getExp();
  }

  public getExp(): void {
    this.datosExp.getExperiencia().subscribe({
      next: (rta: Experiencia[]) => {
        this.experiencias = rta;
      },
      error: (err: HttpErrorResponse) => {
        alert(err.message);
      },
    });
  }
}
