import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HardSkills } from '../models/hardSkills';

@Injectable({
  providedIn: 'root',
})
export class HardSkillsService {
  private URL = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // CREATE
  public agregarSkill(skill: HardSkills): Observable<HardSkills> {
    return this.http.post<HardSkills>(`${this.URL}/cursos/agregar`, skill);
  }

  //READ
  public getSkill(): Observable<HardSkills[]> {
    return this.http.get<HardSkills[]>(`${this.URL}/cursos/todos`);
  }

  //UPDATE
  public actualizarSkill(skill: HardSkills): Observable<HardSkills> {
    return this.http.put<HardSkills>(`${this.URL}/cursos/actualizar`, skill);
  }

  //DELETE
  public borrarSkill(skillId: number): Observable<void> {
    return this.http.delete<void>(`${this.URL}/cursos/borrar/${skillId}`);
  }
}
