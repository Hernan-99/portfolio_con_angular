import { Component, OnInit } from '@angular/core';
import { PrincipalService } from 'src/app/services/principal.service';

@Component({
  selector: 'app-foto-perfil',
  templateUrl: './foto-perfil.component.html',
  styleUrls: ['./foto-perfil.component.css'],
})
export class FotoPerfilComponent implements OnInit {
  // inicializamos la variable
  fotoPerfil: any = '';
  constructor(private principalService: PrincipalService) {}

  ngOnInit(): void {
    this.principalService.getDatos().subscribe((principal) => {
      // le asignamos a la variable foto, el dato que queremos que se muestre
      this.fotoPerfil = principal.foto;
    });
  }
}
