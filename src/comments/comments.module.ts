import { Module } from '@nestjs/common';
import { CommentService } from './comments.service';
import { CommentsController } from './comments.controller';
import { HttpModule } from '@nestjs/axios';

// No nosso module de comentários serão registrados nosso controllers e providers
@Module({
  imports: [HttpModule],
  controllers: [CommentsController],
  providers: [CommentService],
})
export class CommentsModule {}
