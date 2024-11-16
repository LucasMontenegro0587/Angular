import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Clases/usuario';
import { IngresarService } from 'src/app/Servicios/ingresar.service';

@Component({
  selector: 'app-login',
  template: `
    <div class="login">
      <input type="text" placeholder="Usuario" [(ngModel)]='Usuario.email'>
      <input type="password" placeholder="Contraseña" [(ngModel)]='Usuario.password'>
      <a href="#" class="forgot">¿Olvidaste tu contraseña?</a>
      <input type="submit" (click)="loguear()" value="Logueate">
      <input type="submit" (click)="CompletarCampos()" value="Completar Campos">
    </div>
  `,
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Usuario: Usuario = new Usuario();

  constructor(public authService: IngresarService, public router: Router) { }

  ngOnInit(): void {
    if (this.authService.getItemLocal() == null) {
      this.Usuario.estaLogueado = false;
    } else {
      this.Usuario = this.authService.getItemLocal();
    }
  }

  CompletarCampos() {
    this.Usuario.email = "lucasmontenegroburgos@gmail.com";
    this.Usuario.password = "Pentahouse";
  }

  loguear() {
    this.authService.loginWithEmailAndPassword(this.Usuario.email, this.Usuario.password);
  }
}
