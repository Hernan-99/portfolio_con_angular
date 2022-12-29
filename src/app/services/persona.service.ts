import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  //creo una variable para guardar la direccion que declare en el enviroment
  private URL = environment.apiUrl;

  //httpClient para poder utilizar los metodos del crud
  constructor(private http: HttpClient) {}

  //READ
  public getPersona(): Observable<Persona> {
    return this.http.get<Persona>(`${this.URL}/persona/id/1`);
  }

  //UPDATE
  public putPersona(persona: Persona): Observable<Persona> {
    return this.http.put<Persona>(`${this.URL}/persona/actualizar`, persona);
  }
}
