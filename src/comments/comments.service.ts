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
export class CommentService {
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
    //retornar todos os comentários
    return this.comments;
  }

  findOne(id: number) {
    //retorna o comentário com id selecionado
    const comment = this.comments.find((comment) => comment.id === id);

    if (!comment) {
      throw new Error(`Comentário ${id} não encontrado`);
    }

    return comment;
  }

  update(id: number, updateCommentDto: UpdateCommentDto) {
    //atualiza o comentário
    const comment = this.findOne(id);

    const index = this.comments.indexOf(comment);

    const newComment = {
      ...comment,
      ...updateCommentDto,
    };

    this.comments[index] = newComment;

    return newComment;
  }

  remove(id: number) {
    const comment = this.findOne(id);

    const index = this.comments.indexOf(comment);

    this.comments.splice(index, 1);
  }
}
