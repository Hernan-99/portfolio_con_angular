import { Injectable } from '@angular/core';
//sirve para suscribirse que se reciba uan respuesta de forma asincronica
import { Observable } from 'rxjs';
//sirve para hacer peticiones
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PrincipalService {
  //el http en naranja se llama alias
  constructor(private http: HttpClient) {}

  //metodo observable que devuelve los datos del tipo any (o sea de cualquier tipo)
  getDatos(): Observable<any> {
    //llamando al JSON con su path
    return this.http.get('./assets/json/principal.json');
  }
}
