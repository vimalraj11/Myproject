import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DeplyComponent } from './component/deply/deply.component';
import { DeveloperComponent } from './component/developer/developer.component';
import { ErrorpageComponent } from './component/errorpage/errorpage.component';
import { GalleryComponent } from './component/gallery/gallery.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { ServicesComponent } from './component/services/services.component';
import { TestingComponent } from './component/testing/testing.component';

const routes: Routes = [
  {
    path:"login",component:LoginComponent
  },
  {
    path:"home", component:HomeComponent
  },
  {
    path:"login",component:LoginComponent
  },
  {
    path:"register",component:RegisterComponent
  },
  {
    path:"gallery",component:GalleryComponent
  },
  
  {
    path: "services", component:ServicesComponent,     
        children: [
            {
                path: "dev", component: DeveloperComponent
            },
            {
              path: "test", component: TestingComponent
            },
            {
              path: "deply", component:DeplyComponent
            },
          ]
  },
  {path: "error", component: ErrorpageComponent},
  { path: '**', redirectTo: 'error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
