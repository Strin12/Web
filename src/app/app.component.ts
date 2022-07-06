import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuariosModel } from './models/UsuariosModel';
import { UsuariosService } from './services/usuarios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Web';
  dato: boolean = true;
  usuarios: UsuariosModel = new UsuariosModel();

  constructor(private usuariosServices: UsuariosService) { }

  ngOnInit(): void {
  }

  login(form: NgForm){
    this.usuariosServices.login(this.usuarios).subscribe(
      resp => {
        this.dato = false;
        localStorage.setItem('token', resp['token']);
        localStorage.setItem('nombre', resp['users']['name']);
        localStorage.setItem('avatar', resp['users']['personas']['avatar']);

        console.log(resp);
      }

    );

  }


}
