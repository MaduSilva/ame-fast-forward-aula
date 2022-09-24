import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { CommentEntity } from './entities/comment.entity';

// Provider
// Aqui fica as regras de negócio
// Exemplo: falar com banco de dados, funções e métodos que serão executados
// Caracterizado pelo decorator @Injectable (Injeção de Depêndencia)

//Injeção de Depêndencia
//Injetar um trecho de código em outra parte
@Injectable()
export class CommentsService {
  private comments: CommentEntity[] = [
    {
      id: 1,
      comment: 'Some comment',
      user_id: '1',
    },
  ];
  create(createCommentDto: CreateCommentDto) {
    //lógica para criação de novo id do comentário
    const lastId = this.comments[this.comments.length - 1]?.id || 0;

    //novo comentário
    const newComment = {
      id: lastId + 1,
      //rest operator
      ...createCommentDto,
    };

    //inserir e retornar o novo comentário criado
    this.comments.push(newComment);
    return newComment;
  }

  findAll() {
    return this.comments;
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
