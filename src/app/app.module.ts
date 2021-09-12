import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { OxygenComponent } from './oxygen/oxygen.component';
import { NebuliserComponent } from './nebuliser/nebuliser.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OxygenComponent,
    NebuliserComponent,
    ContactUsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: '', component: HomeComponent },
      { path: 'oxygen', component: OxygenComponent },
      { path: 'nebuliser', component: NebuliserComponent },
      { path: 'contact-us', component: ContactUsComponent },
    ]),
    NoopAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
