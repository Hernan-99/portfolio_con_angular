import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HabilidadesDuras } from '../models/habilidades-duras';

@Injectable({
  providedIn: 'root',
})
export class HabilidadesDurasService {
  private URL = environment.apiUrl;

  constructor(private http: HttpClient) {}

  //CREATE
  public agregarHabilidadD(
    habilidad: HabilidadesDuras
  ): Observable<HabilidadesDuras> {
    return this.http.post<HabilidadesDuras>(
      `${this.URL}/habilidades/agregar`,
      habilidad
    );
  }

  //READ
  public getHabilidadesD(): Observable<HabilidadesDuras[]> {
    return this.http.get<HabilidadesDuras[]>(`${this.URL}/habilidades/todas`);
  }

  //UPDATE
  public actualizarHabilidadD(
    habilidad: HabilidadesDuras
  ): Observable<HabilidadesDuras> {
    return this.http.put<HabilidadesDuras>(
      `${this.URL}/habilidades/actualizar`,
      habilidad
    );
  }

  //DELETE
  public borrarHabilidadD(habilidadId: number): Observable<void> {
    return this.http.delete<void>(
      `${this.URL}/habilidades/borrar/${habilidadId}`
    );
  }
}
