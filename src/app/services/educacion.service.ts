import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Educacion } from '../models/educacion';

@Injectable({
  providedIn: 'root',
})
export class EducacionService {
  private URL = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // CREATE
  public agregarEducacion(edu: Educacion): Observable<Educacion> {
    return this.http.post<Educacion>(`${this.URL}/educacion/agregar`, edu);
  }

  //READ
  public getEducacion(): Observable<Educacion[]> {
    return this.http.get<Educacion[]>(`${this.URL}/educacion/todas`);
  }

  //UPDATE
  public actualizarEducacion(edu: Educacion): Observable<Educacion> {
    return this.http.put<Educacion>(`${this.URL}/educacion/actualizar`, edu);
  }

  //DELETE
  public borrarEducacion(eduId: number): Observable<void> {
    return this.http.delete<void>(`${this.URL}/educacion/borrar/${eduId}`);
  }
}
