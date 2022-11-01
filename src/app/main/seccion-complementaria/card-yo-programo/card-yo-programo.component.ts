import { Component, OnInit } from '@angular/core';
import { PrincipalService } from 'src/app/services/principal.service';
import { VideosService } from 'src/app/services/videos.service';
@Component({
  selector: 'app-card-yo-programo',
  templateUrl: './card-yo-programo.component.html',
  styleUrls: ['./card-yo-programo.component.css'],
})
export class CardYoProgramoComponent implements OnInit {
  video: any = '';
  titulo: string = '';
  descripcion: string = '';
  constructor(
    private principalService: PrincipalService,
    private videosService: VideosService
  ) {}

  ngOnInit(): void {
    this.principalService.getDatos().subscribe((principal) => {
      this.titulo = principal.educacion_complementaria[3].institucion;
      this.descripcion = principal.educacion_complementaria[3].descripcion;
    });

    this.videosService.getVideos().subscribe((video) => {
      this.video = video.yoProgramo;
    });
  }
}
