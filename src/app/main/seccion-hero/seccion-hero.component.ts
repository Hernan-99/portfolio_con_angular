import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

//importacion de la clase persona y del servicio
import { Persona } from 'src/app/models/persona';

//importacion del servicio
import { PersonaService } from 'src/app/services/persona.service';

//importamos el servicio
// import { PrincipalService } from 'src/app/servicios/principal.service';
@Component({
  selector: 'app-seccion-hero',
  templateUrl: './seccion-hero.component.html',
  styleUrls: ['./seccion-hero.component.css'],
})
export class SeccionHeroComponent implements OnInit {
  // inicializamos persona de tipo Persona y editPersona de tipo Persona. Ambos pueden ser del tipo persona o estar indefinidas
  public persona: Persona | undefined;
  public editPersona: Persona | undefined;

  constructor(
    //inyectamos el servicio para acceder a los metodos desde la clase
    private datosPersona: PersonaService
  ) {}

  ngOnInit(): void {
    //llamamos al metodo get
    this.getPersona();
  }
  public getPersona(): void {
    //llamamos al metodo por el servicio
    this.datosPersona.getPersona().subscribe({
      next: (rta: Persona) => {
        this.persona = rta;
      },
      error: (err: HttpErrorResponse) => {
        alert(err.message);
      },
    });
  }
}
