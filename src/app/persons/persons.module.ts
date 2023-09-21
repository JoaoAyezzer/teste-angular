import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

import { PersonsRoutingModule } from './persons-routing.module';
import { PersonsReadComponent } from './persons-read/persons-read.component';

@NgModule({
  declarations: [PersonsReadComponent],
  imports: [CommonModule, PersonsRoutingModule, MatTableModule],
})
export class PersonsModule {}
