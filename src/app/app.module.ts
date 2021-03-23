import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
