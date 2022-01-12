import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { HomeComponent } from './component/home/home.component';
import { ServicesComponent } from './component/services/services.component';
import { GalleryComponent } from './component/gallery/gallery.component';
import { DeveloperComponent } from './component/developer/developer.component';
import { TestingComponent } from './component/testing/testing.component';
import { DeplyComponent } from './component/deply/deply.component';
import { ErrorpageComponent } from './component/errorpage/errorpage.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ServicesComponent,
    GalleryComponent,
    DeveloperComponent,
    TestingComponent,
    DeplyComponent,
    ErrorpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
