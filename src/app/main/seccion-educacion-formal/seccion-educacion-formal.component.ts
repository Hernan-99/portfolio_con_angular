import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/models/educacion';
import { EducacionService } from 'src/app/services/educacion.service';

@Component({
  selector: 'app-seccion-educacion-formal',
  templateUrl: './seccion-educacion-formal.component.html',
  styleUrls: ['./seccion-educacion-formal.component.css'],
})
export class SeccionEducacionFormalComponent implements OnInit {
  public educaciones: Educacion[] = [];
  constructor(private datosEdu: EducacionService) {}

  ngOnInit(): void {
    this.getEdu();
  }

  public getEdu(): void {
    this.datosEdu.getEducacion().subscribe({
      next: (rta: Educacion[]) => {
        this.educaciones = rta;
      },
      error: (err: HttpErrorResponse) => {
        alert(err.message);
      },
    });
  }
}
