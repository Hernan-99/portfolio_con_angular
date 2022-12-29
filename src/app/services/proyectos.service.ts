import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Proyectos } from '../models/proyectos';

@Injectable({
  providedIn: 'root',
})
export class ProyectosService {
  getIcono() {
    throw new Error('Method not implemented.');
  }
  private URL = environment.apiUrl;
  constructor(private http: HttpClient) {}

  //CREATE
  public agregarProyecto(proyecto: Proyectos): Observable<Proyectos> {
    return this.http.post<Proyectos>(`${this.URL}/proyectos/agregar`, proyecto);
  }

  //READ
  public getProyectos(): Observable<Proyectos[]> {
    return this.http.get<Proyectos[]>(`${this.URL}/proyectos/todos`);
  }

  //UPDATE
  public actualizarProyectos(proyecto: Proyectos): Observable<Proyectos> {
    return this.http.put<Proyectos>(
      `${this.URL}/proyectos/actualizar`,
      proyecto
    );
  }

  //DELETE
  public borrarProyectos(proyectoId: number): Observable<void> {
    return this.http.delete<void>(`${this.URL}/proyectos/borrar/${proyectoId}`);
  }
}
