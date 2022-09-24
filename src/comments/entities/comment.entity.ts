//Entitys - Entidades
//Aqui vão ser declarados os campos que nosso resource terá
//Precisa ser exatamente o que o banco de dados irá receber
export class Comment {
  id: number;
  user_id: string;
  comment: string;
}
