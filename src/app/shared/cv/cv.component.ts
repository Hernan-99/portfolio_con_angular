import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, inject, OnInit } from '@angular/core';
import { PrincipalService } from 'src/app/services/principal.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  curriculum: string = '';
  cvDescarga?: boolean;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private principalService: PrincipalService
  ) {}

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    if (
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop > 100
    ) {
      this.cvDescarga = true;
      console.log(this.cvDescarga);
    } else if (
      (this.cvDescarga && window.pageYOffset) ||
      document.documentElement.scrollTop ||
      this.document.body.scrollTop < 50
    ) {
      this.cvDescarga = false;
    }
  }
  ngOnInit(): void {
    this.principalService.getDatos().subscribe((principal) => {
      this.curriculum = principal.curriculum;
    });
  }
}
