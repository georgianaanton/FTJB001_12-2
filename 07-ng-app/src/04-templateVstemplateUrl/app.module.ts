import { NgModule } from '@angular/core';
import { AppComponent } from './app/app.component';
import { BrowserModule } from '@angular/platform-browser';
import { MyImageComponent } from './my-image/my-image.component';
import { MyBadgeComponent } from './my-badge/my-badge.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    declarations:[AppComponent, MyImageComponent, MyBadgeComponent, FooterComponent],
    imports: [BrowserModule],
    bootstrap: [AppComponent]
})
export class AppModule{}