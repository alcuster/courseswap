export class Course {
  department: string;
  courseNumber: string;
  days: string;
  time: string;
  id: number;
  fullTitle: string;
  description: string;

  constructor(department: string,
              courseNumber: string,
              days: string,
              time: string,
              id: number,
              fullTitle: string,
              description: string) {
    this.department = department;
    this.courseNumber = courseNumber;
    this.days = days;
    this.time = time;
    this.id = id;
    this.fullTitle = fullTitle;
    this.description = description;
  }
}
