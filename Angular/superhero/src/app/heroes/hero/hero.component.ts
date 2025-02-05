import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: false,
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = "Spiderman";
  public age: number | null = null;                                                                                                                                                                                                                                  

  public nombre: string = "";
  public edad: number | null = null;

  public default: string = "Sin método aún";
  public nombreMayus: string = "";

  public get metodo(): string {
    return this.name ? `${this.name} es un superhéroe` : "Nombre no definido";
  }

  public actualizarNombre(): void {
    this.name = this.nombre;
    this.nombreMayus = this.nombre.toUpperCase();
    this.default = this.metodo;
    this.nombre = '';
  }

  public actualizarEdad(): void {
    this.age = this.edad;
    this.edad = null;
  }
}
