import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';

const routes: Routes = [
  // ACÁ SE DEBE REDIRIGIR .html
  // path: '**';
  // redirectTo: '';
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }