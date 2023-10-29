import { Component, OnInit } from '@angular/core';
import { Student } from './student-model';

@Component({
  selector: 'app-student-management',
  templateUrl: './student-management.component.html',
  styleUrls: ['./student-management.component.css']
})
export class StudentManagementComponent implements OnInit {
  students: Student[] = [
    {
      firstName: 'Anzori',
      lastName: 'Sakhelashvili',
      personalNumber: '12345',
      address: {
        country: 'Georgia',
        city: 'Terjola',
        street: 'Kh.24',
      },
    },
    {
      firstName: 'Pavle',
      lastName: 'Vefxvadze',
      personalNumber: '12345',
      address: {
        country: 'Georgia',
        city: 'Tbilisi',
        street: 'df.33',
      },
    },
  ];

  newStudent: Student = new Student();

  ngOnInit() {}

  addStudent() {
    if (this.newStudent.firstName && this.newStudent.lastName && this.newStudent.personalNumber) {
      this.students.push(this.newStudent);
      this.newStudent = new Student();
    }
  }
}
