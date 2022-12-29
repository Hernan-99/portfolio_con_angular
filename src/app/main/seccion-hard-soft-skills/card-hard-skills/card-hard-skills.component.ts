import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HabilidadesDuras } from 'src/app/models/habilidades-duras';
//importamos el servicio
import { HabilidadesDurasService } from 'src/app/services/habilidades-duras.service';

@Component({
  selector: 'app-card-hard-skills',
  templateUrl: './card-hard-skills.component.html',
  styleUrls: ['./card-hard-skills.component.css'],
})
export class CardHardSkillsComponent implements OnInit {
  public habilidades: HabilidadesDuras[] = [];
  constructor(private datosHabilidad: HabilidadesDurasService) {}

  ngOnInit(): void {
    this.getHabilidades();
  }

  public getHabilidades(): void {
    this.datosHabilidad.getHabilidadesD().subscribe({
      next: (rta: HabilidadesDuras[]) => {
        this.habilidades = rta;
      },
      error: (err: HttpErrorResponse) => {
        alert(err.message);
      },
    });
  }
}
