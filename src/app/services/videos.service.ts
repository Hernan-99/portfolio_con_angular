import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class VideosService {
  constructor(private http: HttpClient) {}

  getVideos(): Observable<any> {
    //llamando al JSON con su path
    return this.http.get('./assets/json/videos.json');
  }
}
