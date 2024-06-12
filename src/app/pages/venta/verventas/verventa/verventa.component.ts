import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TaquilleroService } from 'src/app/service/taquillero.service';

@Component({
  selector: 'app-verventa',
  templateUrl: './verventa.component.html',
  styleUrls: ['./verventa.component.css']
})
export class VerventaComponent {
  
  user:any = null;

  constructor(
    public login:TaquilleroService,

    private router:Router,) { }

  ngOnInit(): void {

    this.user = this.login.getUser();
    console.log("usuario ",this.user)

  }
}
