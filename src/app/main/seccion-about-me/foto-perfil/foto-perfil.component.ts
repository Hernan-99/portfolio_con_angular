import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-foto-perfil',
  templateUrl: './foto-perfil.component.html',
  styleUrls: ['./foto-perfil.component.css'],
})
export class FotoPerfilComponent implements OnInit {
  public persona: Persona | undefined;
  public editPersona: Persona | undefined;

  constructor(private personaImg: PersonaService) {}

  ngOnInit(): void {
    this.getImgPerfilPersona();
  }

  public getImgPerfilPersona(): void {
    this.personaImg.getPersona().subscribe({
      next: (rta: Persona) => {
        this.persona = rta;
      },
      error: (err: HttpErrorResponse) => {
        alert(err.message);
      },
    });
  }
}
