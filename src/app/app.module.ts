import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router'; // Importa el RouterModule
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideNativeDateAdapter } from '@angular/material/core';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { SharedModule } from "./shared/shared.module";
import { TopbarComponent } from "./layout/topbar/topbar.component";
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    StoreModule.forRoot(RootReducer, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    SharedModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([])
  ],

  exports: [
    BrowserModule,
    AppRoutingModule,
    TopbarComponent
  ],
  providers: [provideAnimationsAsync(), provideNativeDateAdapter(), provideHttpClient(withFetch())],
  bootstrap: [AppComponent],
})
export class AppModule { }
