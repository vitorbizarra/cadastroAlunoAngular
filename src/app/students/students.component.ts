import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {
  ra: string = '';
  name: string = '';
  email: string = '';
  phone: string = '';

  students: Array<any> = [{
    ra: '123456',
    name: 'Vitor',
    email: '123456@facens.br',
    phone: '1599999999'
  }];

  addStudent(f: NgForm) {
    this.students.push({
      ra: this.ra,
      name: this.name,
      email: this.email,
      phone: this.phone
    });

    this.ra = '';
    this.name = '';
    this.email = '';
    this.phone = '';
  }
}
