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
      +' Los usuarios y las contraseñas válidas están en el link del JSON. '
      +' El sistema es simple pero todo el código fue escrito de cero al igual que los estilos aplicados. '
      +' Los datos son tomados por HTTP desde un JSON que yo he creado previamente en forma pública. ';
  ;
 
}
