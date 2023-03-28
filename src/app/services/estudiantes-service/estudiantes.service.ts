import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Estudiante } from '../../interfaces/estudiante';

@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {

  getEstudiante() {
    return this.http.get<Estudiante>('http://localhost:8080/api/estudiantes/7');
  }

  constructor(private http: HttpClient) { }
}
