import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { ChipComponent } from './chip/chip.component';
import { DatabindComponent } from './databind/databind.component';

@NgModule({
  declarations: [
    AppComponent,
    ChipComponent,
    DatabindComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
