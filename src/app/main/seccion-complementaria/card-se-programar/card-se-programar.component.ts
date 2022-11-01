import { Component, OnInit } from '@angular/core';
import { PrincipalService } from 'src/app/services/principal.service';
import { VideosService } from 'src/app/services/videos.service';
@Component({
  selector: 'app-card-se-programar',
  templateUrl: './card-se-programar.component.html',
  styleUrls: ['./card-se-programar.component.css'],
})
export class CardSeProgramarComponent implements OnInit {
  video: any = '';
  titulo: string = '';
  descripcion: string = '';
  constructor(
    private principalService: PrincipalService,
    private videosService: VideosService
  ) {}

  ngOnInit(): void {
    this.principalService.getDatos().subscribe((principal) => {
      this.titulo = principal.educacion_complementaria[0].institucion;
      this.descripcion = principal.educacion_complementaria[0].descripcion;
    });

    this.videosService.getVideos().subscribe((video) => {
      this.video = video.ingles;
    });
  }
}
