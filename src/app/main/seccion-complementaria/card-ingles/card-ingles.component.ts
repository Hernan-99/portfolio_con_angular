import { Component, OnInit } from '@angular/core';
import { PrincipalService } from 'src/app/services/principal.service';
import { VideosService } from 'src/app/services/videos.service';
@Component({
  selector: 'app-card-ingles',
  templateUrl: './card-ingles.component.html',
  styleUrls: ['./card-ingles.component.css'],
})
export class CardInglesComponent implements OnInit {
  video: any = '';
  titulo: string = '';
  descripcion: string = '';

  constructor(
    private principalService: PrincipalService,
    private videosService: VideosService
  ) {}

  ngOnInit(): void {
    this.principalService.getDatos().subscribe((principal) => {
      this.titulo = principal.educacion_complementaria[2].institucion;
      this.descripcion = principal.educacion_complementaria[2].descripcion;
    });

    this.videosService.getVideos().subscribe((video) => {
      this.video = video.seProgramar;
    });
  }
}
