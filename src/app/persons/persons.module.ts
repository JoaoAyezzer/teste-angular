import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { PersonsRoutingModule } from './persons-routing.module';
import { PersonsReadComponent } from './persons-read/persons-read.component';
import { PersonFormComponent } from './person-form/person-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PersonsReadComponent, PersonFormComponent],
  imports: [
    CommonModule,
    PersonsRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
})
export class PersonsModule {}
