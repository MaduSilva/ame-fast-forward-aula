//Module - organizar a estrutura da nossa aplicação

import { Module } from '@nestjs/common';
import { CommentsModule } from './comments/comments.module';

//vamos importar tudo o que precisamos aqui dentro
//cada unidade deve ter seu próprio module, pra não sobrecarregar o módulo "root" principal

//comando para criar novo resource - nest g resource
//What name would you like to use for this resource (plural, e.g., "users")? >>>> Comments
//What transport layer do you use? >>>>> REST API
//Would you like to generate CRUD entry points? >>>> Yes
@Module({
  imports: [CommentsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
