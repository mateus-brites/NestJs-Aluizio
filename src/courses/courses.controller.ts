import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';

@Controller('courses') // tudo que cair na rota /courses vai ser tratado por esse controller
export class CoursesController {
  @Get('list') // será chamado na requisição courses/list
  FindAll(@Res() response) {
    return response.status(200).send('All courses');
  }

  @Get(':id') // indica um parâmetro dinâmico ex: /1 ou /2...
  FindOne(@Param() params) {
    // params vira um array que recebe todos os parâmetros obs: pode ser desestruturado
    return `Curso #${params.id}`;
  }

  @Post()
  @HttpCode(HttpStatus.NO_CONTENT)
  Create(@Body() body) {
    // body é um objeto que contem todas as informações que estão sendo enviadas
    return body;
  }

  @Patch(':id')
  Update(@Param('id') id: string, @Body() body) {
    return `Atualização do curso ${id} para o curso ${body.newId}`;
  }

  @Delete(':id')
  exclude(@Param() params) {
    return `Curso #${params.id} excluido`;
  }
}
