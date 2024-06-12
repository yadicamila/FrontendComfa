import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Taquillero } from 'src/app/models/taquillero';
import { TaquilleroService } from 'src/app/service/taquillero.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.component.html',
  styleUrls: ['./sesion.component.css']
})
export class SesionComponent {

  // taquillero!: Taquillero;
  usuario: string = '';
  contrasena: string = '';
  error: string = '';
 

  constructor(private authService: TaquilleroService, private router: Router,private snack:MatSnackBar,) { }

  login(): void {
    console.error(this.usuario);
    this.authService.login(this.usuario, this.contrasena).subscribe(
      (response: Taquillero) => {
        console.log(response);
        // Guarda la información del usuario en el localStorage o en una variable global
        localStorage.setItem('user', JSON.stringify(response));
        this.router.navigate(['/agregar-venta']);        
      },
      error => {
        this.error = 'Credenciales inválidas';
        console.error(error);
      }
    );
  }

}
