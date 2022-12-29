import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HabilidadesBlandas } from '../models/habilidades-blandas';

@Injectable({
  providedIn: 'root',
})
export class HablidadesBlandasService {
  private URL = environment.apiUrl;

  constructor(private http: HttpClient) {}

  //CREATE
  public agregarHabilidadB(
    habilidad: HabilidadesBlandas
  ): Observable<HabilidadesBlandas> {
    return this.http.post<HabilidadesBlandas>(
      `${this.URL}/habilidadesB/agregar`,
      habilidad
    );
  }

  //READ
  public getHabilidadesB(): Observable<HabilidadesBlandas[]> {
    return this.http.get<HabilidadesBlandas[]>(
      `${this.URL}/habilidadesB/todas`
    );
  }

  //UPDATE
  public actualizarHabilidadB(
    habilidad: HabilidadesBlandas
  ): Observable<HabilidadesBlandas> {
    return this.http.put<HabilidadesBlandas>(
      `${this.URL}/habilidadesB/actualizar`,
      habilidad
    );
  }

  //DELETE
  public borrarHabilidadB(habilidadId: number): Observable<void> {
    return this.http.delete<void>(
      `${this.URL}/habilidadesB/borrar/${habilidadId}`
    );
  }
}
