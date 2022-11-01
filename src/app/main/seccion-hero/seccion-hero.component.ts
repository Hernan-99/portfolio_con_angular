import { Component, OnInit } from '@angular/core';
//importamos el servicio
import { PrincipalService } from 'src/app/services/principal.service';
@Component({
  selector: 'app-seccion-hero',
  templateUrl: './seccion-hero.component.html',
  styleUrls: ['./seccion-hero.component.css'],
})
export class SeccionHeroComponent implements OnInit {
  //podria ser una forma si no usamos el json
  // nombre = 'Hernan';
  // apellido = 'Sanchez';

  // inicializamos las variable de instancia para almacenar los datos
  nombre: string = '';
  apellido: string = '';
  profesion: string = '';
  hero: any = '';

  constructor(
    //inyectamos el serviccio para acceder a los metodos desde la clase
    private principalService: PrincipalService
  ) {}

  ngOnInit(): void {
    //almaceno en la variable de instancia (infoPortfolio) los datos obtenidos por el servicio
    this.principalService.getDatos().subscribe((principal) => {
      // console.log(principal);

      // INFORMACION A MOSTRAR
      this.nombre = principal.nombre;
      this.apellido = principal.apellido;
      this.profesion = principal.profesion;
      this.hero = principal.hero;
    });
  }
}
