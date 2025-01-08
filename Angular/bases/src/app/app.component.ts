import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bases';
  public counter: number = 1;

  /*
  * actualizarCantidad
  */
  public actualizarCantidad(value:number): void {
    this.counter += value;
  }
}
