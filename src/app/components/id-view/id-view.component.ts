import { Component, OnInit } from '@angular/core';
import { EstudiantesService } from '../../services/estudiantes-service/estudiantes.service';
import { Estudiante } from '../../interfaces/estudiante';

@Component({
  selector: 'app-id-view',
  templateUrl: './id-view.component.html',
  styleUrls: ['./id-view.component.css']
})
export class IdViewComponent implements OnInit {

  cardImage!: string;
  studentImage: string = "https://holatelcel.com/wp-content/uploads/2022/08/hombre-estudiante-universitario.jpg";
  qrImage: string = "https://static.vecteezy.com/system/resources/previews/002/557/391/original/qr-code-for-scanning-free-vector.jpg";
  name: string = "";
  carrer: string = "";
  rh: string = "";
  cod: string = "";

  ngOnInit() {
    this.cardImage = this.studentImage;
    this.estudiantesService.getEstudiante().subscribe((estudiante: Estudiante) => {
      this.name = estudiante.Nombre;
      this.carrer = estudiante.Programa;
      this.rh = estudiante.Rh;
      this.cod = estudiante.Codigo;
    });
  }


  flipSide() {
    if (this.cardImage == this.studentImage) {
      this.cardImage = this.qrImage;
    } else {
      this.cardImage = this.studentImage;
    }
  }

  constructor(private estudiantesService: EstudiantesService) { }

}
