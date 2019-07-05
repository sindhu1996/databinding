import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ch1Component } from './ch1/ch1.component';
import { Ch2Component } from './ch2/ch2.component';
import { FormsModule } from "@angular/forms";
@NgModule({
  declarations: [Ch1Component, Ch2Component],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[Ch1Component, Ch2Component]
})
export class Task7Module { }
