import { DOCUMENT } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, HostListener, Inject, inject, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/services/persona.service';
import { PrincipalService } from 'src/app/servicios/principal.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  curriculum: Persona | undefined;
  cvDescarga?: boolean; //necesario para la funcion

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private cv: PersonaService
  ) {}

  //funcion de ocultar icono cv
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    if (
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop > 100
    ) {
      this.cvDescarga = true;
      // console.log(this.cvDescarga);
    } else if (
      (this.cvDescarga && window.pageYOffset) ||
      document.documentElement.scrollTop ||
      this.document.body.scrollTop < 50
    ) {
      this.cvDescarga = false;
    }
  }

  ngOnInit(): void {
    this.getPersona();
  }
  public getPersona(): void {
    //llamamos al metodo por el servicio
    this.cv.getPersona().subscribe({
      next: (rta: Persona) => {
        this.curriculum = rta;
      },
      error: (err: HttpErrorResponse) => {
        alert(err.message);
      },
    });
  }
}
