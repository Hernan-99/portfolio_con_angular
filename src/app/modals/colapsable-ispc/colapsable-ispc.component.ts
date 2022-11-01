import { Component, OnInit } from '@angular/core';
import { PrincipalService } from 'src/app/services/principal.service';

@Component({
  selector: 'app-colapsable-ispc',
  templateUrl: './colapsable-ispc.component.html',
  styleUrls: ['./colapsable-ispc.component.css'],
})
export class ColapsableIspcComponent implements OnInit {
  titulo: string = '';
  constructor(private principalService: PrincipalService) {}

  ngOnInit(): void {
    this.principalService.getDatos().subscribe((principal) => {
      this.titulo = principal.ispcTec.titulo;
    });
  }
}
