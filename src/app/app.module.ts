import { TestComponent } from './test/test.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule, TestComponent, AppComponent // Import other Angular modules like BrowserModule, FormsModule, etc.
  ],
  providers: [], // Add services and providers here
  bootstrap: [] // Bootstrap the root component
})
export class AppModule { }
