import { Component, OnInit } from '@angular/core';

@Component({ //Decorator que marca una clase como un componente Angular 
  selector: 'app-footer', //pie de pagina
  templateUrl: './footer.component.html', //aceso a footer.html
  styleUrls: ['./footer.component.css'] //acceso a footer.css
})
export class FooterComponent implements OnInit { //método de inicialización y configuración para crear una Page instancia.
  public autor: any = {nombre:'Comfacauca'}
  constructor() { } //permite establecer valores predeterminados, limitar la creación de instancias y escribir código flexible y fácil de leer.

  ngOnInit(): void {
  } //es propio de angular y se ejecuta después del constructor . A diferencia del constructor,
   //ngOnInit pertenece al ciclo de vida propio de angular y es aquí donde le 'decimos' que el componente
   // ya está listo para darle uso.

}
