import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('courses') // tudo que cair na rota /courses vai ser tratado por esse controller
export class CoursesController {
  @Get('list') // será chamado na requisição courses/list
  FindAll() {
    return 'All courses';
  }

  @Get(':id') // indica um parâmetro dinâmico ex: /1 ou /2...
  FindOne(@Param() params) {
    // params vira um array que recebe todos os parâmetros obs: pode ser desestruturado
    return `Curso #${params.id}`;
  }

  @Post()
  Create(@Body() body) {
    // body é um objeto que contem todas as informações que estão sendo enviadas
    return body;
  }
}
