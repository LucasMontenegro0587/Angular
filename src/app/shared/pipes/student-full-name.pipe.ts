import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'studentsFullNamePipe',
  standalone: false,
})
export class StudentsFullName implements PipeTransform {

  transform(alumno: { nombre: string, apellido: string }): string {
    return `${alumno.nombre} ${alumno.apellido}`;
  }

}
