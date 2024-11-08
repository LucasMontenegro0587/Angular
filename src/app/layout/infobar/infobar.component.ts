import { Component } from '@angular/core';

@Component({
  selector: 'app-infobar',
  templateUrl: './infobar.component.html',
  styleUrls: ['./infobar.component.scss']
})
export class InfobarComponent {
  rolActual: string = 'Usuario';
  searchTerm: string = '';

  onSearch(): void {
    console.log('Searching for:', this.searchTerm);
  }
}
