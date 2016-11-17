import { Injectable } from '@angular/core';
import { Course } from './course.model';

var SIZE: number = 3;

var COURSES: Course[] = [
  new Course('BIO',
             '112',
             'MWF',
             '8:30-9:20',
             1,
             'Organisms, Evolution, & Ecosystems',
             'Introduction to the unifying principles of biology at the levels of organization from molecules through cells.  The main topics include biochemistry and bioenergetics, cell structure and physiology, and Mendelian and molecular genetics.  A laboratory, emphasizing planning, performing, and presenting experiments, meets once each week. Students may take BIO 111 with either BIO 112 or BIO 114 to complete biology introductory course requirements.'),
  new Course('CSC',
             '221',
             'TR',
             '1:40-2:55',
             2,
             'Data Structures',
             'A study of abstract data types, including lists, stacks, queues, and search tables, and their supporting data structures, including arrays, linked lists, binary search trees, and hash tables.  Implications of the choice of data structure on the efficiency of the implementation of an algorithm.  Efficient methods of sorting and searching.'),
  new Course('POL',
             '223',
             'MWF',
             '11:30-12:20',
             3,
             'The Presidency',
             'The modern American presidency from a policy-making perspective, including consideration of the various internal and external factors that constrain the behavior of incumbent presidents.')
];

@Injectable()
export class CourseService {
  getSize() : number {
    return SIZE;
  }

  getAll() : Course[] {
    return COURSES;
  }
  get(id: number) : Course {
    return COURSES.find(c => c.id === id);
  }

  submit(department: string, courseNumber: string, days: string, time: string, id: number, fullTitle: string, description: string) {
    COURSES.push(new Course(department, courseNumber, days, time, id, fullTitle, description));
    SIZE++;
  }

  sortedCourses(): Course[] {
    return this.getAll().sort((a: Course, b: Course) => b.id - a.id);
  }
}
