import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NavigationComponent } from './core/navigation/navigation.component';
import { ShellComponent } from './core/shell/shell.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ShellComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
