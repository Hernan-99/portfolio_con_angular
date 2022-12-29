import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

//importaciones de clase y servicio
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-descripcion',
  templateUrl: './descripcion.component.html',
  styleUrls: ['./descripcion.component.css'],
})
export class DescripcionComponent implements OnInit {
  public persona: Persona | undefined;
  public editPersona: Persona | undefined;

  constructor(private descPersona: PersonaService) {}

  ngOnInit(): void {
    this.getDescPersona();
  }

  public getDescPersona(): void {
    this.descPersona.getPersona().subscribe({
      next: (rta: Persona) => {
        this.persona = rta;
      },
      error: (err: HttpErrorResponse) => {
        alert(err.message);
      },
    });
  }
}
