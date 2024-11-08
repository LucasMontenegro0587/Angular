import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  usuarioActual: string | null = null;

  iniciarSesion(): void {
    const rol = prompt('Ingrese su rol (ADM o ALM):');
    const contrasenia = prompt('Ingrese su contraseña:');
    const correo = prompt('Ingrese su correo electrónico registrado:');
    const documento = prompt('Ingrese su número de documento (formato: P12345678):');

    if (this.validarCredenciales(rol, contrasenia, correo, documento)) {
      this.usuarioActual = rol === 'ADM' ? 'Administrador' : 'Usuario';
      alert(`Sesión iniciada como ${this.usuarioActual}. Bienvenido/a a Pentahouse`);
    } else {
      alert('Credenciales incorrectas. Por favor, intente de nuevo, si el problema persiste, contactarse con el Administrador.');
    }
  }

  finalizarSesion(): void {
    if (confirm('¿Deseás desconectarse?')) {
      alert('Sesión cerrada con éxito');
      this.usuarioActual = null;
    }
  }

  private validarCredenciales(
    rol: string | null,
    contrasena: string | null,
    correo: string | null,
    documento: string | null
  ): boolean {
    // Validación de roles y contraseñas
    if (
      (rol === 'ADM' && contrasena === 'Pentahouse-ADM') ||
      (rol === 'ALM' && contrasena === 'Pentahouse-ALM')
    ) {
      // Verificar correo y formato de documento
      const correoValido = correo && correo.includes('@');
      const documentoValido = documento && /^P\d+$/.test(documento);

      return correoValido && documentoValido;
    }
    return false;
  }
}
