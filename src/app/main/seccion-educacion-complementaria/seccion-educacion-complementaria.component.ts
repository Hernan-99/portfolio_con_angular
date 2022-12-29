import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Cursos } from 'src/app/models/cursos';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-seccion-educacion-complementaria',
  templateUrl: './seccion-educacion-complementaria.component.html',
  styleUrls: ['./seccion-educacion-complementaria.component.css'],
})
export class SeccionEducacionComplementariaComponent implements OnInit {
  public cursos: Cursos[] = [];
  constructor(private datosCursos: CursosService) {}

  ngOnInit(): void {
    this.getCursos();
  }
  public getCursos(): void {
    this.datosCursos.getCursos().subscribe({
      next: (rta: Cursos[]) => {
        this.cursos = rta;
      },
      error: (err: HttpErrorResponse) => {
        alert(err.message);
      },
    });
  }
}
