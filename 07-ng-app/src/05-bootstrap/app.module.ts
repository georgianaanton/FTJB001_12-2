import { NgModule } from '@angular/core';
import { AppComponent } from './app/app.component';
import { BrowserModule } from '@angular/platform-browser';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DpComponent } from './dp/dp.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations:[AppComponent, DpComponent],
    imports: [BrowserModule, NgbModule, FormsModule],
    bootstrap: [AppComponent]
})
export class AppModule{}