import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Student {
  id: string;
  firstName: string;
  lastName: string;
  birthDate?: Date;
  parentName?: string;
  parentEmail?: string;
  parentPhone?: string;
  photoUrl?: string;
  status?: 'present' | 'absent';
}

const mockStudents: Student[] = [
  { id: '1', firstName: 'Greg', lastName: 'Marine', birthDate: new Date('01/01/2000'), parentName: 'Bill Marine', parentEmail: 'billmarine@gmail.com', parentPhone: '555-555-5555' },
  { id: '2', firstName: 'Jonathan', lastName: 'Bennett', birthDate: new Date('01/01/2000'), parentName: 'Bill Bennett', parentEmail: '', parentPhone: '555-555-5555' },
  { id: '3', firstName: 'Neil', lastName: 'Estandarte', birthDate: new Date('01/01/2000'), parentName: 'Bill Estandarte', parentEmail: '', parentPhone: '555-555-5555' },
  { id: '4', firstName: 'Jennifer', lastName: 'Townsend',  birthDate: new Date('01/01/2000'), parentName: 'Bill Townsend', parentEmail: '', parentPhone: '555-555-5555' },
  { id: '5', firstName: 'Casey', lastName: 'McBride', birthDate: new Date('01/01/2000'), parentName: 'Bill McBride', parentEmail: '', parentPhone: '555-555-5555' },
  { id: '6', firstName: 'Diane', lastName: 'Rivera', birthDate: new Date('01/01/2000'), parentName: 'Bill Rivera', parentEmail: '', parentPhone: '555-555-5555' },
  { id: '7', firstName: 'Troy', lastName: 'Gutierrez', birthDate: new Date('01/01/2000'), parentName: 'Bill Gutierrez', parentEmail: '', parentPhone: '555-555-5555' },
  { id: '8', firstName: 'Priscilla', lastName: 'Little', birthDate: new Date('01/01/2000'), parentName: 'Bill Little', parentEmail: '' },
  { id: '9', firstName: 'Bobby', lastName: 'Robbins', birthDate: new Date('01/01/2000'), parentName: 'Bill Robbins', parentEmail: '', parentPhone: '555-555-5555' },
  { id: '10', firstName: 'Edmund', lastName: 'Gardner', birthDate: new Date('01/01/2000'), parentName: 'Bill Gardner', parentEmail: '', parentPhone: '555-555-5555' },
];

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor() { }

  getAll() {
    return [...mockStudents];
  }

  getStudent(id: string): Observable<Student> {
    return of(mockStudents.find(student => student.id === id));
  }
}
