import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CoursesService } from './courses.service';

interface CreateCourseDto {
  id: string;
  name: string;
  description: string;
  tags: string[];
}

@Controller('courses') // tudo que cair na rota /courses vai ser tratado por esse controller
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}
  @Get()
  findAll() {
    return this.coursesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coursesService.findOne(id);
  }

  @Post()
  create(@Body() createCourseDto: CreateCourseDto) {
    return this.coursesService.create(createCourseDto);
  }
}
