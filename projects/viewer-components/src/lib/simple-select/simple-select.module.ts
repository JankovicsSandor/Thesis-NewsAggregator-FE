import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleSelectComponent } from './simple-select.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SimpleSelectComponent],
  imports: [
    CommonModule,
    MatAutocompleteModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [SimpleSelectComponent]
})
export class SimpleSelectModule {}
