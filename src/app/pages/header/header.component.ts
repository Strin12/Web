import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
nombre:any;
avatar:any;
  constructor(private sesion: AppComponent) {
   this.nombre = localStorage.getItem('nombre');
   this.avatar = localStorage.getItem('avatar');

   }

  ngOnInit(): void {
  }
logout(){
  localStorage.removeItem('nombre');
  localStorage.removeItem('token');
  localStorage.removeItem('avatar');
  this.sesion.dato = true;
}
}
