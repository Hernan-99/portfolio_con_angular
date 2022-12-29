import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Experiencia } from '../models/experiencia';

@Injectable({
  providedIn: 'root',
})
export class ExperienciaService {
  private URL = environment.apiUrl;
  constructor(private http: HttpClient) {}

  // CREATE
  public agregarExp(exp: Experiencia): Observable<Experiencia> {
    return this.http.post<Experiencia>(`${this.URL}/experiencia/agregar`, exp);
  }

  //READ
  public getExperiencia(): Observable<Experiencia[]> {
    return this.http.get<Experiencia[]>(`${this.URL}/experiencia/todas`);
  }

  //UPDATE
  public actualizarExperiencia(exp: Experiencia): Observable<Experiencia> {
    return this.http.put<Experiencia>(
      `${this.URL}/experiencia/actualizar`,
      exp
    );
  }

  //DELETE
  public borrarExperiencia(expId: number): Observable<void> {
    return this.http.delete<void>(`${this.URL}/experiencia/borrar/${expId}`);
  }
}
