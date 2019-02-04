import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [AppComponent],// declare components to be used
    imports: [BrowserModule, CommonModule],// child modules
    bootstrap: [AppComponent]
})
export class AppModule{}