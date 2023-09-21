import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonsReadComponent } from './persons-read/persons-read.component';

const routes: Routes = [{ path: '', component: PersonsReadComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonsRoutingModule {}
