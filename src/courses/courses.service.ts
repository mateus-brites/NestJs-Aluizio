import { Injectable } from '@nestjs/common';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
  private courses: Course[] = [
    {
      id: '1',
      description: 'Nest',
      name: 'Curso',
      tags: ['js', 'ts'],
    },
  ];

  findAll() {
    return this.courses;
  }

  findOne(id) {
    return this.courses.filter((course) => course.id === id);
  }

  create(CreateCourseDto: Course) {
    const course: Course = CreateCourseDto;
    this.courses.push(course);
  }
}
