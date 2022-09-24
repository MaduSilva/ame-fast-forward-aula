// o que vai vir no body da requisição

import { IsString } from 'class-validator';
import { CommentEntity } from '../entities/comment.entity';
export class CreateCommentDto extends CommentEntity {
  @IsString()
  user_id: string;

  @IsString()
  comment: string;
}
