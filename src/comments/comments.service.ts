import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

// Provider
// Aqui fica as regras de negócio
// Exemplo: falar com banco de dados, funções e métodos que serão executados
// Caracterizado pelo decorator @Injectable (Injeção de Depêndencia)

//Injeção de Depêndencia
//Injetar um trecho de código em outra parte
@Injectable()
export class CommentsService {
  create(createCommentDto: CreateCommentDto) {
    return 'This action adds a new comment';
  }

  findAll() {
    return `This action returns all comments`;
  }

  findOne(id: number) {
    return `This action returns a #${id} comment`;
  }

  update(id: number, updateCommentDto: UpdateCommentDto) {
    return `This action updates a #${id} comment`;
  }

  remove(id: number) {
    return `This action removes a #${id} comment`;
  }
}
