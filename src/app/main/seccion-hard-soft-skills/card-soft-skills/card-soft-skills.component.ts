import { Component, OnInit } from '@angular/core';
//importamos el json
import { PrincipalService } from 'src/app/services/principal.service';

@Component({
  selector: 'app-card-soft-skills',
  templateUrl: './card-soft-skills.component.html',
  styleUrls: ['./card-soft-skills.component.css'],
})
export class CardSoftSkillsComponent implements OnInit {
  //inicializamos variables
  habilidades: any = [];
  constructor(
    //inyectamos el serviccio para acceder a los metodos desde la clase
    private principalService: PrincipalService
  ) {}

  ngOnInit(): void {
    this.principalService.getDatos().subscribe((principal) => {
      //this.skills referencia a la variable inicializada. despues accedemos al json (principal.json) y accedemos
      //al array skills
      this.habilidades = principal.habilidades;
    });
  }
}
