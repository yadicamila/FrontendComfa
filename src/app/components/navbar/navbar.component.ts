// import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaquilleroService } from 'src/app/service/taquillero.service';
// import { accesousuarios } from 'src/app/models/accesousuarios';
// import { IpService } from 'src/app/services/Ip.service';
// import { AccesoUsuariosService } from 'src/app/services/accesousuarios.service';
// import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit { //Un enlace de ciclo de vida que se llama después de que Angular haya inicializado todas las propiedades vinculadas a datos de una directiva. Defina un método ngOnInit() para manejar cualquier tarea de inicialización adicional.

  isLoggedIn = false;
  user:any = null;
  banderaResgistrar = false;
  
  constructor(
    public login:TaquilleroService,

    private router:Router,) { }

  ngOnInit(): void {

    this.user = this.login.getUser();
    console.log("usuario ",this.user)

  }

}
