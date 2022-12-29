import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/models/proyectos';
import { ProyectosService } from 'src/app/services/proyectos.service';

@Component({
  selector: 'app-card-card-form',
  templateUrl: './card-card-form.component.html',
  styleUrls: ['./card-card-form.component.css'],
})
export class CardCardFormComponent implements OnInit {
  // public proyectos: Proyectos[] = [];
  constructor() {}

  ngOnInit(): void {
    // this.getProyectos();
  }

  // public getProyectos(): void {
  //   this.datosProyectos.getProyectos().subscribe({
  //     next: (rta: Proyectos[]) => {
  //       this.proyectos = rta;
  //     },
  //     error: (err: HttpErrorResponse) => {
  //       alert(err.message);
  //     },
  //   });
  // }
}
