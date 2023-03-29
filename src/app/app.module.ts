import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EjercicioNgifNgforModule } from './ejercicios/ejercicio-ngif-ngfor/ejercicio-ngif-ngfor.module';
import { EjercicioPipesNgclassModule } from './ejercicios/ejercicio-pipes-ngclass/ejercicio-pipes-ngclass.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    EjercicioNgifNgforModule,
    EjercicioPipesNgclassModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }