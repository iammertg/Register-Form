import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchService} from './register/country-auto-suggestion/search.service'
import { AppComponent } from './app.component';
import { CountryAutoSuggestionComponent } from './register/country-auto-suggestion/country-auto-suggestion.component'
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { RegisterSuccessComponent } from './register/register-success/register-success.component';
import { Interceptor } from './shared/http-interceptors/interceptor';


const routes: Routes =[{
  path: '',
  redirectTo: 'register',
  pathMatch: 'full'
},
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'success',
    component: RegisterSuccessComponent
  }
];


@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent,
    CountryAutoSuggestionComponent,
    RegisterComponent,
    RegisterSuccessComponent
  ],
  providers: [SearchService,Interceptor,{ provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true}],
  bootstrap: [AppComponent]
})

export class AppModule { }
