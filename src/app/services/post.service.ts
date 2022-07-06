import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UsuariosService } from './usuarios.service';

const url = environment.url

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private hhtp: HttpClient, private login: UsuariosService) { }


list(){
  return this.hhtp.get(`${url}postsInactivo?token=${this.login.leer_token()}`);
}

activar(posts:any){
  return this.hhtp.put(`${url}activar/${posts.id}?token=${this.login.leer_token()}`, posts);
}
reachazar(id:any){
  return this.hhtp.delete(`${url}posts/${id}?token=${this.login.leer_token()}`);
}

}
