import { Component, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { Validators } from '@angular/forms';

@Component({
  selector: 'students-management',
  templateUrl: './students-management.component.html',
  styleUrls: ['./students-management.component.scss']
})
export class studentsManagement implements OnInit {
  public studentForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.studentForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      dni: ['', Validators.required],
      birthDate: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      address: ['']
    });
  }

  public managementInscriptions(): void {
    if (this.studentForm.valid) {
      console.log('Datos del Estudiante:', this.studentForm.value);
      // Lógica para el registro de los estudiantes
      this.studentForm.reset();
    } else {
      console.log('Formulario no válido');
    }
  }
}
