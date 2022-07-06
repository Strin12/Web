import { Component, OnInit } from '@angular/core';
import { UsuariosModel } from 'src/app/models/UsuariosModel';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
usuarios:any;
cargando: boolean = false;

  constructor(private usuariosServices: UsuariosService) { }

  ngOnInit(): void {
    this.list();
  }
  list(){
    this.cargando = true;
    this.usuariosServices.list().subscribe(
      resp =>{
        this.usuarios = resp;
        this.cargando = false;
        console.log(this.usuarios);
      }
    );
  }
  borrar( usuario: UsuariosModel, i: number ) {
    this.usuariosServices.delete( usuario.id ).subscribe(
      resp => {
        this.usuarios.splice(i, 1);
      }
    );
}

}
