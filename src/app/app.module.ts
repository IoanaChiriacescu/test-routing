import { MyTestModule } from './my-test-module/my-test.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    PageNotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    MyTestModule, //The import order of the modules is important because the order of the routes defined in the modules affects route matching.
                  //If the AppModule were imported first, its wildcard route (path: '**') would take precedence over the routes defined in my-test module
    AppRoutingModule, //module were routes are configured
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
