import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  rolActual: string;

  constructor() {
    // Simulación de la asignación de rol
    // Esto puede ser modificado para obtener el rol de un servicio de autenticación o de una sesión guardada
    this.rolActual = this.obtenerRolUsuario();
  }

  obtenerRolUsuario(): string {
    // Lógica simulada para determinar el rol del usuario
    // En una aplicación real, se podría reemplazar por una llamada a un servicio de autenticación
    const rolGuardado = localStorage.getItem('rolUsuario');
    return rolGuardado ? rolGuardado : 'Usuario'; // Retorna 'Usuario' como valor por defecto si no se encuentra un rol guardado
  }
}
