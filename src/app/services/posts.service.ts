import { Injectable } from '@angular/core';

@Injectable()
export class PostsService {
  private posts = [
    {
      id: 1,
      title: 'The First Title',
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. `,
      created_at: '01-01-01'
    },
    {
      id: 2,
      title: 'The Second Title',
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. `,
      created_at: '02-02-02'
    },
    {
      id: 3,
      title: 'The Third Title',
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. `,
      created_at: '03-03-03'
    }
  ]
  
  constructor() {  }

  public getPosts(){
    return this.posts;
  }

}
