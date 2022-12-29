import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cursos } from '../models/cursos';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  private URL = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // CREATE
  public agregarCursos(curso: Cursos): Observable<Cursos> {
    return this.http.post<Cursos>(`${this.URL}/cursos/agregar`, curso);
  }

  //READ
  public getCursos(): Observable<Cursos[]> {
    return this.http.get<Cursos[]>(`${this.URL}/cursos/todos`);
  }

  //UPDATE
  public actualizarCursos(curso: Cursos): Observable<Cursos> {
    return this.http.put<Cursos>(`${this.URL}/cursos/actualizar`, curso);
  }

  //DELETE
  public borrarCursos(cursoId: number): Observable<void> {
    return this.http.delete<void>(`${this.URL}/cursos/borrar/${cursoId}`);
  }
}
