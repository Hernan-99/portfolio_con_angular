import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ImagenesExperienciaLaboralService {
  constructor(private http: HttpClient) {}

  getImg(): Observable<any> {
    //llamando al JSON con su path
    return this.http.get('./assets/json/imgs.json');
  }
}
