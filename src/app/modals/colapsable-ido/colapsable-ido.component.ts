import { Component, OnInit } from '@angular/core';

import { PrincipalService } from 'src/app/services/principal.service';

@Component({
  selector: 'app-colapsable-ido',
  templateUrl: './colapsable-ido.component.html',
  styleUrls: ['./colapsable-ido.component.css'],
})
export class ColapsableIdoComponent implements OnInit {
  titulo: string = '';
  constructor(private principalService: PrincipalService) {}

  ngOnInit(): void {
    this.principalService.getDatos().subscribe((principal) => {
      this.titulo = principal.idoSec.titulo;
    });
  }
}
