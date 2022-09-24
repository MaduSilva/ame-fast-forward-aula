import { Module } from '@nestjs/common';
import { CommentService } from './comments.service';
import { CommentsController } from './comments.controller';

// No nosso module de comentários serão registrados nosso controllers e providers
@Module({
  controllers: [CommentsController],
  providers: [CommentService],
})
export class CommentsModule {}
