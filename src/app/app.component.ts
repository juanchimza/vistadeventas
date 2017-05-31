import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string = 'Vista de Ventas';
  infoParaElProfe : string = 'Profe:' 
      +' Lo que hago en la web es presentarle a cada vendedor las ventas realizadas.'
      +' Para acceder a ellas debe ingresar usuario y contraseña.'
      +' Los usuarios y las contraseñas válidas son: jhernandez (jher123) / rjuarez (rjua123) / rpuente (rpue123) / hdominguez (hdom123). '
      +' Los datos son tomados por HTTP desde un JSON que yo he creado previamente en forma pública. '
  ;
 
}
