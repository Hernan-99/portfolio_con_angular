import { Component, OnInit } from '@angular/core';
import { PrincipalService } from 'src/app/services/principal.service';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.css'],
})
export class SocialMediaComponent implements OnInit {
  icono1: string = '';
  icono2: string = '';
  icono3: string = '';
  icono4: string = '';
  icono5: string = '';
  constructor(private principalService: PrincipalService) {}

  ngOnInit(): void {
    this.principalService.getDatos().subscribe((principal) => {
      this.icono1 = principal.navbar.iconoGitHub;
      this.icono2 = principal.navbar.iconoIN;
      this.icono3 = principal.navbar.iconoIg;
      this.icono4 = principal.navbar.iconoTw;
      this.icono5 = principal.navbar.iconoLogin;
    });
  }
}
