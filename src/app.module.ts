//Module - organizar a estrutura da nossa aplicação

import { Module } from '@nestjs/common';
import { CommentsModule } from './comments/comments.module';

//vamos importar tudo o que precisamos aqui dentro
//cada unidade deve ter seu próprio module, pra não sobrecarregar o módulo "root" principal

//comando para criar novo module - nest g resource
@Module({
  imports: [CommentsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
