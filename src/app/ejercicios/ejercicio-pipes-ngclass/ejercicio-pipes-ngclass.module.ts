import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EjercicioPipesNgclassComponent } from './ejercicio-pipes-ngclass.component';



@NgModule({
  declarations: [EjercicioPipesNgclassComponent],
  imports: [
    CommonModule
  ],
  exports: [EjercicioPipesNgclassComponent],
})
export class EjercicioPipesNgclassModule { }
