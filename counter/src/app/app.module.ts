import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    RouterModule,
    HttpClientModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
