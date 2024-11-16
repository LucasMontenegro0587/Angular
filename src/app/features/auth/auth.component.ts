import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  loginForm: FormGroup;
  isLoading: boolean = false;
  errorMessage: string | null = null;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    // Formulario reactivo
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  //Inicio de sesión
  onSubmit(): void {
    if (this.loginForm.invalid) {
      return; // Si el formulario es inválido
    }

    this.isLoading = true;
    this.errorMessage = null;

    const { email, password } = this.loginForm.value;
    this.authService.login(email, password).subscribe({
      next: () => {
        this.isLoading = false;
        this.router.navigate(['/dashboard']); // Redirige al dashboard
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = 'Credenciales inválidas o error de servidor'; // Mensaje de error genérico
      }
    });
  }

  // Mostrar u ocultar la contraseña
  togglePasswordInputType(inputElement: HTMLInputElement): void {
    inputElement.type = inputElement.type === 'password' ? 'text' : 'password';
  }
}
