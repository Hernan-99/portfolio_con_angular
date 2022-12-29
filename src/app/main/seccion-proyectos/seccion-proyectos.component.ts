import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/models/proyectos';
import { ProyectosService } from 'src/app/services/proyectos.service';

@Component({
  selector: 'app-seccion-proyectos',
  templateUrl: './seccion-proyectos.component.html',
  styleUrls: ['./seccion-proyectos.component.css'],
})
export class SeccionProyectosComponent implements OnInit {
  public proyectos: Proyectos[] = [];
  constructor(private datosProyectos: ProyectosService) {}

  ngOnInit(): void {
    this.getProyectos();
  }
  public getProyectos(): void {
    this.datosProyectos.getProyectos().subscribe({
      next: (rta: Proyectos[]) => {
        this.proyectos = rta;
      },
      error: (err: HttpErrorResponse) => {
        alert(err.message);
      },
    });
  }
}
