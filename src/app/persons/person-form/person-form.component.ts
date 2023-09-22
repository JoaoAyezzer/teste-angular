import { PersonService } from './../../services/person.service';
import { Contact } from './../models/contact';
import { Person } from './../models/person';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DateAdapter } from '@angular/material/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css'],
})
export class PersonFormComponent implements OnInit {
  constructor(
    private _personService: PersonService,
    private _dateAdapter: DateAdapter<any>,
    public dialogRef: MatDialogRef<PersonFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Person
  ) {}
  @ViewChild(MatTable) table: MatTable<Contact>;
  displayedColumns = ['name', 'fone', 'email', 'action'];
  addContact() {
    this.data.contacts.push({
      id: '',
      name: '',
      fone: '',
      email: '',
    });
    this.table.renderRows();
  }
  removeContact(index: number) {
    if (this.data.contacts.length > 1) {
      this.data.contacts.splice(index, 1);
    }
    this.table.renderRows();
  }
  ngOnInit(): void {
    this._dateAdapter.setLocale('pt-br');
  }
  onClose(): void {
    this.dialogRef.close();
  }

  savePerson() {
    this._personService.create(this.data).subscribe((res) => {
      console.log(res);
      this.onClose();
    });
  }
}
