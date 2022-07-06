import { Component, OnInit } from '@angular/core';
import { postsModel } from 'src/app/models/postsModel';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
posts:any;
cargando: boolean = false;

  constructor(private postServices: PostService) { }

  ngOnInit(): void {
    this.list();
  }

  list(){
    this.cargando = true;
    this.postServices.list().subscribe(
      resp => {
        this.cargando = false;
        this.posts = resp;
        console.log(this.posts);

      }
    );
  }
activar(posts: postsModel, i:number){
  this.postServices.activar(posts).subscribe(
    resp =>{
      this.posts.splice(i, 1);
    }
  );
}
rechazar( posts: postsModel, i: number ) {
  this.postServices.reachazar(posts).subscribe(
    resp =>{
      this.posts.splice(i, 1);
    }
  );
}


}
