import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

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
  { id: '1', firstName: 'Greg', lastName: 'Marine' },
  { id: '2', firstName: 'Jonathan', lastName: 'Bennett' },
  { id: '3', firstName: 'Neil', lastName: 'Estandarte' },
  { id: '4', firstName: 'Jennifer', lastName: 'Townsend' },
  { id: '5', firstName: 'Casey', lastName: 'McBride' },
  { id: '6', firstName: 'Diane', lastName: 'Rivera' },
  { id: '7', firstName: 'Troy', lastName: 'Gutierrez' },
  { id: '8', firstName: 'Priscilla', lastName: 'Little' },
  { id: '9', firstName: 'Bobby', lastName: 'Robbins' },
  { id: '10', firstName: 'Edmund', lastName: 'Gardner' }
];

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor() { }

  /**
   * Models a service call with a brief delay,
   * then returns a mock array of students.
   */
  getAll() {
    const mockStudents$ = of([...mockStudents]);
    return mockStudents$.pipe(delay(2000)); // 2s
  }
}
