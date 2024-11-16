import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Curso {
  titulo: string;
  imagen: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Pentahouse';
  cursos: Curso[] = [
    { titulo: 'Maquetación Web', imagen: './public/images/mw-logo.png' },
    { titulo: 'Python', imagen: './public/images/python-logo.png' },
    { titulo: 'Angular', imagen: './public/images/angular-logo.png' },
    { titulo: 'CoffeeScript', imagen: './public/images/coffeescript-logo.png' },
    { titulo: 'Nuxt.Js', imagen: './public/images/nuxtjs-logo.png' },
    { titulo: 'C++', imagen: './public/images/c++-logo.png' },
    { titulo: 'Django', imagen: './public/images/django-logo.png' },
    { titulo: 'Tailwind CSS', imagen: './public/images/tailwind-logo.jpg' },
    { titulo: 'Kitsunia', imagen: './public/images/kitsunia-logo.png' },
    { titulo: 'Valquirium', imagen: './public/images/valquirium-logo.png' }
  ];

  constructor(private router: Router) {}

  inscribirse(curso: string): void {
    console.log(`¿Estás seguro de anotarte en el curso: ${curso}?`);
    alert(`Inscripción al curso: ${curso} exitosa. ¡Felicidades!`);
    this.router.navigate(['/dashboard']); // Navegar al dashboard después de la inscripción
  }
}
