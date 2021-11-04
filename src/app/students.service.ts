import { Injectable } from '@angular/core';
import { Storage } from '@capacitor/storage';
import { concatMap, Observable, Subject } from 'rxjs';

const STUDENTS_KEY = 'students';

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
  { id: '4', firstName: 'Jennifer', lastName: 'Townsend', birthDate: new Date('01/01/2000'), parentName: 'Bill Townsend', parentEmail: '', parentPhone: '555-555-5555' },
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
  students$ = new Subject<Student[]>();

  constructor() { }

  allStudents() {
    return this.students$.asObservable();
  }

  private async getAllStudents() {
    const allKeys = await Storage.keys()
    const studentKeys = allKeys.keys.filter(key => key.startsWith(STUDENTS_KEY));
    const students = await Promise.all(studentKeys.map(key => this.getStudentByKey(key)));
    return students;
  }

  async pushAll(): Promise<void> {
    const students = await this.getAllStudents();
    this.students$.next(students);
  }

  getStudent(id: string): Promise<Student> {
    return this.getStudentByKey(`${STUDENTS_KEY}-${id}`);
  }

  private async getStudentByKey(key: string): Promise<Student> {
    const result = await Storage.get({ key });

    return JSON.parse(result.value);
  }

  async resetAttendance() {
    const students = await this.getAllStudents();

    await students.map(student => {
      delete student.status;
      this.doSaveStudent(student);
    });

    this.pushAll();
  }

  async doSaveStudent(student) {
    await Storage.set({
      key: `${STUDENTS_KEY}-${student.id}`,
      value: JSON.stringify(student)
    });
  }

  async saveStudent(student: Student) {
    this.doSaveStudent(student);
    this.pushAll();
  }

  async deleteStudent(id: string) {
    await Storage.remove({ key: `${STUDENTS_KEY}-${id}` });

    this.pushAll();
  }

  async clearData() {
    await Storage.clear();

    this.pushAll();
  }

  async seedData() {

    await mockStudents.map(student => this.saveStudent(student));

    this.pushAll();
  }
}
