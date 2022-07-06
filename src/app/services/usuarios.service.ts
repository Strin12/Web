import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


const url = environment.url;
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
token: any;
  constructor(private hhtp: HttpClient) { }

  list(){
    return this.hhtp.get(`${url}users?token=${this.leer_token()}`);
  }

  delete(id:any){
    return this.hhtp.delete(`${url}users/${id}?token=${this.leer_token()}`);
  }

  login(usuario: any){
    return this.hhtp.post(`${url}login`, usuario);
  }
  leer_token() {
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
    } else {
      this.token = null;
    }
    return this.token;
  }

}
