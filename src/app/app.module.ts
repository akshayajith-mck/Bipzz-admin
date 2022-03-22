import { AllComponentModules } from './components/component.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { serviceModule } from './services/service.module';
import { HttpClientModule } from '@angular/common/http';
// import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    serviceModule,
    AllComponentModules,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
