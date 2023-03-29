import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models';

@Component({
  selector: 'app-ejercicio-ngif-ngfor',
  templateUrl: './ejercicio-ngif-ngfor.component.html',
  styleUrls: ['./ejercicio-ngif-ngfor.component.css']
})
export class EjercicioNgifNgforComponent implements OnInit {
  public loading = true;
  public usuarios: Usuario[] = [
    new Usuario(1, 'Lionel', 'Messi', 'Lionel@gmail.com', 16, true, new Date('1994-01-03')),
    new Usuario(2, 'Guido', 'Rodriguez', 'Guido@gmail.com', 16, false, new Date('1992-05-14')),
    new Usuario(3, 'Emiliano', 'Martinez', 'Emiliano@gmail.com', 16, false, new Date('1980-02-24')),
    new Usuario(4, 'Nahuel', 'Molinas', 'Nahuel@gmail.com', 29, true, new Date('1995-08-12')),
    new Usuario(5, 'Angel', 'Correa', 'Angel@gmail.com', 21, true, new Date('2002-07-24')),
  ];
  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }
}
