import { Component, OnInit } from '@angular/core';

import { PrincipalService } from 'src/app/services/principal.service';

@Component({
  selector: 'app-colapsable-unla',
  templateUrl: './colapsable-unla.component.html',
  styleUrls: ['./colapsable-unla.component.css'],
})
export class ColapsableUnlaComponent implements OnInit {
  titulo: string = '';
  constructor(private principalService: PrincipalService) {}

  ngOnInit(): void {
    this.principalService.getDatos().subscribe((principal) => {
      this.titulo = principal.unlaLic.titulo;
    });
  }
}
