import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
export class FormsComponent implements OnInit {
  public inscriptionForm: FormGroup;
  public courseOptions: string[] = ['Matemáticas', 'Historia', 'Ciencia', 'Lengua'];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.inscriptionForm = this.fb.group({
      fullName: ['', Validators.required],
      dni: ['', Validators.required],
      birthDate: [''],
      email: ['', [Validators.required, Validators.email]],
      course: ['', Validators.required],
      modality: ['presencial', Validators.required],
      shift: ['mañana', Validators.required],
      paymentMethod: ['credito', Validators.required],
      terms: [false, Validators.requiredTrue],
    });
  }

  public formsInscriptions(): void {
    if (this.inscriptionForm.valid) {
      console.log('Formulario Enviado:', this.inscriptionForm.value);
      // Lógica para procesar la inscripción
      this.inscriptionForm.reset();
    } else {
      console.log('Formulario no válido');
    }
  }
}
