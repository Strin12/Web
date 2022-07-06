import { RouterModule, Routes } from "@angular/router";
import { Component, NgModule } from "@angular/core";
import { UsuarioComponent } from "./pages/usuario/usuario.component";
import { UsuariosComponent } from "./pages/usuarios/usuarios.component";
import { PostComponent } from "./pages/post/post.component";



const routes: Routes = [
    {path: 'usuarios', component:UsuariosComponent},
    {path: 'usuario/:id', component:UsuarioComponent},
    {path: 'post', component: PostComponent},
    {path: '', pathMatch: 'full', redirectTo: 'usuarios'}
];


@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}