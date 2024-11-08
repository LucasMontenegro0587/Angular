import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {
  frasesMotivacionales: string[] = [
    'El éxito no es la clave de la felicidad. La felicidad es la clave del éxito',
    'No sueñes con el éxito, trabaja para alcanzarlo',
    'La excelencia es un hábito, no un acto',
    'La motivación es lo que te pone en marcha, el hábito es lo que hace que sigas',
    'El único lugar donde el éxito viene antes que el trabajo es en el diccionario',
    'No importa lo lento que vayas, siempre y cuando no te detengas',
    'El fracaso es una parte del proceso para llegar al éxito',
    'El camino al éxito es la actitud',
    'El talento gana partidos, pero el trabajo en equipo y la inteligencia ganan campeonatos',
    'Cree en ti mismo y todo será posibl.'
  ];
  fraseActual: string;
  usuario = {
    nombre: 'Lucas Leonel',
    apellido: 'Montenegro Burgos'
  };

  constructor() {
    this.fraseActual = this.frasesMotivacionales[0];
  }

  ngOnInit(): void {
    this.cambiarFraseCadaCincoMinutos();
  }

  cambiarFraseCadaCincoMinutos(): void {
    let indice = 0;
    setInterval(() => {
      indice = (indice + 1) % this.frasesMotivacionales.length;
      this.fraseActual = this.frasesMotivacionales[indice];
    }, 300000); // 300,000 milésimas de segundos = 5 minutos
  }
}
