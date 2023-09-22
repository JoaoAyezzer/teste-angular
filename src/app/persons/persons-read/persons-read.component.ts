import { PersonService } from './../../services/person.service';
import { PersonFormComponent } from './../person-form/person-form.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Person } from '../models/person';

@Component({
  selector: 'app-persons-read',
  templateUrl: './persons-read.component.html',
  styleUrls: ['./persons-read.component.css'],
})
export class PersonsReadComponent implements OnInit {
  person: Person = {
    id: '',
    name: '',
    cpf: '',
    dateBirth: new Date(),
    contacts: [
      {
        id: '',
        name: '',
        email: '',
        fone: '',
      },
    ],
  };
  persons: Person[] = [];

  displayedColumns = ['id', 'name', 'cpf', 'dateBirth', 'actions'];

  constructor(
    public dialog: MatDialog,
    private _personService: PersonService
  ) {}
  ngOnInit(): void {
    this._personService.findAll().subscribe((res) => (this.persons = res));
  }

  openDialog(person: Person | null): void {
    if (person == null) person = this.person;
    const dialogRef = this.dialog.open(PersonFormComponent, {
      data: person,
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }
}
