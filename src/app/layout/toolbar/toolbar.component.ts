import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  // Simulación de datos de usuario
  user = {
    nombre: 'Lucas Leonel',
    apellido: 'Montenegro Burgos',
    avatar: 'https://example.com/avatar.jpg' // URL de imagen de avatar
  };

  // Rol actual del usuario: 'Administrador' o 'Usuario'
  rolActual: 'Administrador' | 'Usuario' = 'Usuario';

  constructor(private router: Router) {}

  // Método para cerrar sesión
  cerrarSesion(): void {
    if (confirm('¿Deseás cerrar sesión?')) {
      // Lógica para cerrar sesión
      alert('Sesión cerrada con éxito.');
      // Redirigir al usuario al inicio del sitio web
      this.router.navigate(['/index']);
    }
  }
}