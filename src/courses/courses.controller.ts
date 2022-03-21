import { Controller, Get } from '@nestjs/common';

@Controller('courses') // tudo que cair na rota /courses vai ser tratado por esse controller
export class CoursesController {
  @Get('list') // será chamado na requisição courses/list
  FindAll() {
    return 'All courses';
  }
}
