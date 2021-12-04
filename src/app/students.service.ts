import { Injectable } from '@angular/core';
import { Storage } from '@capacitor/storage';
import { BehaviorSubject, Observable } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { Student } from './student';

const STUDENTS_KEY = 'students';

const newStudent: Student = {
  id: '',
  firstName: '',
  lastName: '',
  parentName: '',
  parentEmail: '',
  parentPhone: '',
  photoUrl: '',
};

const mockStudents: Student[] = [
  {
    id: '1',
    firstName: 'Greg',
    lastName: 'Marine',
    birthDate: new Date('01/01/2000'),
    parentName: 'Bill Marine',
    parentEmail: 'billmarine@gmail.com',
    parentPhone: '555-555-5555',
  },
  {
    id: '2',
    firstName: 'Jonathan',
    lastName: 'Bennett',
    birthDate: new Date('01/01/2000'),
    parentName: 'Bill Bennett',
    parentEmail: '',
    parentPhone: '555-555-5555',
  },
  {
    id: '3',
    firstName: 'Neil',
    lastName: 'Estandarte',
    birthDate: new Date('01/01/2000'),
    parentName: 'Bill Estandarte',
    parentEmail: '',
    parentPhone: '555-555-5555',
  },
  {
    id: '4',
    firstName: 'Jennifer',
    lastName: 'Townsend',
    birthDate: new Date('01/01/2000'),
    parentName: 'Bill Townsend',
    parentEmail: '',
    parentPhone: '555-555-5555',
  },
  {
    id: '5',
    firstName: 'Casey',
    lastName: 'McBride',
    birthDate: new Date('01/01/2000'),
    parentName: 'Bill McBride',
    parentEmail: '',
    parentPhone: '555-555-5555',
  },
  {
    id: '6',
    firstName: 'Diane',
    lastName: 'Rivera',
    birthDate: new Date('01/01/2000'),
    parentName: 'Bill Rivera',
    parentEmail: '',
    parentPhone: '555-555-5555',
  },
  {
    id: '7',
    firstName: 'Troy',
    lastName: 'Gutierrez',
    birthDate: new Date('01/01/2000'),
    parentName: 'Bill Gutierrez',
    parentEmail: '',
    parentPhone: '555-555-5555',
  },
  {
    id: '8',
    firstName: 'Priscilla',
    lastName: 'Little',
    birthDate: new Date('01/01/2000'),
    parentName: 'Bill Little',
    parentEmail: '',
  },
  {
    id: '9',
    firstName: 'Bobby',
    lastName: 'Robbins',
    birthDate: new Date('01/01/2000'),
    parentName: 'Bill Robbins',
    parentEmail: '',
    parentPhone: '555-555-5555',
  },
  {
    id: '10',
    firstName: 'Edmund',
    lastName: 'Gardner',
    birthDate: new Date('01/01/2000'),
    parentName: 'Bill Gardner',
    parentEmail: '',
    parentPhone: '555-555-5555',
  },
];

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  private students$ = new BehaviorSubject<Student[]>([]);

  public async init(): Promise<void> {
    const students = await this.getAllStudents();
    if (students.length === 0) {
      await this.seedData();
    } else {
      await this.pushAll();
    }
  }

  public allStudents(): Observable<Student[]> {
    return this.students$.asObservable();
  }

  private async getAllStudents(): Promise<Student[]> {
    const allKeys = await Storage.keys();
    const studentKeys = allKeys.keys.filter((key) =>
      key.startsWith(STUDENTS_KEY)
    );
    const students = await Promise.all(
      studentKeys.map((key) => this.getStudentByKey(key))
    );
    return students;
  }

  private async pushAll(): Promise<void> {
    const students = await this.getAllStudents();
    this.students$.next(students);
  }

  public getStudent(id: string): Promise<Student> {
    if (id === 'new') {
      return Promise.resolve(newStudent);
    }

    return this.getStudentByKey(`${STUDENTS_KEY}-${id}`);
  }

  private async getStudentByKey(key: string): Promise<Student> {
    const result = await Storage.get({ key });
    return JSON.parse(result.value);
  }

  public async resetAttendance(): Promise<void> {
    const students = await this.getAllStudents();
    var tasks = students.map(({ status, ...student }) =>
      this.doSaveStudent(student)
    );
    await Promise.all(tasks);
    this.pushAll();
  }

  private async doSaveStudent(student: Student): Promise<void> {
    await Storage.set({
      key: `${STUDENTS_KEY}-${student.id}`,
      value: JSON.stringify(student),
    });
  }

  public async saveStudent(student: Student): Promise<void> {
    student.id ??= uuidv4();
    await this.doSaveStudent(student);
    this.pushAll();
  }

  public markPresent(student: Student): Promise<void> {
    student.status = 'present';
    return this.doSaveStudent(student);
  }

  public markAbsent(student: Student): Promise<void> {
    student.status = 'absent';
    return this.doSaveStudent(student);
  }

  public async deleteStudent(id: string): Promise<void> {
    await Storage.remove({ key: `${STUDENTS_KEY}-${id}` });
    this.pushAll();
  }

  public async clearData(): Promise<void> {
    await Storage.clear();
    this.pushAll();
  }

  public async seedData(): Promise<void> {
    const results = mockStudents.map((student) => this.doSaveStudent(student));
    await Promise.all(results);
    this.pushAll();
  }
}
