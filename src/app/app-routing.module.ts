import { PersonsModule } from './persons/persons.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'persons' },
  {
    path: 'persons',
    loadChildren: () =>
      import('./persons/persons.module').then((mod) => mod.PersonsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
