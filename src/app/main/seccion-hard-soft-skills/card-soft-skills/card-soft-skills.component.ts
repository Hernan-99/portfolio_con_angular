import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HabilidadesBlandas } from 'src/app/models/habilidades-blandas';
import { HablidadesBlandasService } from 'src/app/services/hablidades-blandas.service';
//importamos el json

@Component({
  selector: 'app-card-soft-skills',
  templateUrl: './card-soft-skills.component.html',
  styleUrls: ['./card-soft-skills.component.css'],
})
export class CardSoftSkillsComponent implements OnInit {
  //inicializamos variables
  public habilidades: HabilidadesBlandas[] = [];
  constructor(private datosHabilidad: HablidadesBlandasService) {} //inyectamos el serviccio para acceder a los metodos desde la clase

  ngOnInit(): void {
    this.getHabilidadesB();
  }

  public getHabilidadesB(): void {
    this.datosHabilidad.getHabilidadesB().subscribe({
      next: (rta: HabilidadesBlandas[]) => {
        this.habilidades = rta;
      },
      error: (err: HttpErrorResponse) => {
        alert(err.message);
      },
    });
  }
}
