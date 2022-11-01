import { Component, OnInit } from '@angular/core';

//importamos el json
import { PrincipalService } from 'src/app/services/principal.service';

@Component({
  selector: 'app-card-hard-skills',
  templateUrl: './card-hard-skills.component.html',
  styleUrls: ['./card-hard-skills.component.css'],
})
export class CardHardSkillsComponent implements OnInit {
  lenguajes: any = [];
  constructor(
    //inyectamos el serviccio para acceder a los metodos desde la clase
    private principalService: PrincipalService
  ) {}

  ngOnInit(): void {
    this.principalService.getDatos().subscribe((principal) => {
      //this.skills referencia a la variable inicializada. despues accedemos al json (principal.json) y accedemos
      //al array skills

      this.lenguajes = principal.lenguajes;
    });
  }
}
