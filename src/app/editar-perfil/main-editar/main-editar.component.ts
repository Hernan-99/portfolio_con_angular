import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Cursos } from 'src/app/models/cursos';
import { Educacion } from 'src/app/models/educacion';
import { Experiencia } from 'src/app/models/experiencia';
import { HabilidadesBlandas } from 'src/app/models/habilidades-blandas';
import { HabilidadesDuras } from 'src/app/models/habilidades-duras';
import { Persona } from 'src/app/models/persona';
import { Proyectos } from 'src/app/models/proyectos';
import { CursosService } from 'src/app/services/cursos.service';
import { EducacionService } from 'src/app/services/educacion.service';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { HabilidadesDurasService } from 'src/app/services/habilidades-duras.service';
import { HablidadesBlandasService } from 'src/app/services/hablidades-blandas.service';
import { PersonaService } from 'src/app/services/persona.service';
import { ProyectosService } from 'src/app/services/proyectos.service';

@Component({
  selector: 'app-main-editar',
  templateUrl: './main-editar.component.html',
  styleUrls: ['./main-editar.component.css'],
})
export class MainEditarComponent implements OnInit {
  public persona: Persona | undefined;
  public editPersona: Persona | undefined;
  public experiencias: Experiencia[] = [];
  public educaciones: Educacion[] = [];
  public cursos: Cursos[] = [];
  public habilidadesD: HabilidadesDuras[] = [];
  public habilidadesB: HabilidadesBlandas[] = [];
  public proyectos: Proyectos[] = [];

  constructor(
    private datosPersona: PersonaService,
    private datosExp: ExperienciaService,
    private datosEdu: EducacionService,
    private datosCursos: CursosService,
    private datosHabilidadD: HabilidadesDurasService,
    private datosHabilidadB: HablidadesBlandasService,
    private datosProyectos: ProyectosService
  ) {}

  ngOnInit(): void {
    this.getPersona();
    this.getExp();
    this.getEdu();
    this.getCursos();
    this.getHabilidadesD();
    this.getHabilidadesB();
    this.getProyectos();
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

  public getHabilidadesD(): void {
    this.datosHabilidadD.getHabilidadesD().subscribe({
      next: (rta: HabilidadesDuras[]) => {
        this.habilidadesD = rta;
      },
      error: (err: HttpErrorResponse) => {
        alert(err.message);
      },
    });
  }

  public getHabilidadesB(): void {
    this.datosHabilidadB.getHabilidadesB().subscribe({
      next: (rta: HabilidadesBlandas[]) => {
        this.habilidadesB = rta;
      },
      error: (err: HttpErrorResponse) => {
        alert(err.message);
      },
    });
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
