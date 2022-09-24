import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';

// No nosso module de comentários serão registrados nosso controllers e providers
@Module({
  controllers: [CommentsController],
  providers: [CommentsService],
})
export class CommentsModule {}
