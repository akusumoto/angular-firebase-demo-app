import { Injectable } from '@angular/core';
import { Todo } from '../interfaces/todo';
import { Firestore } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private store: Firestore) { }

  createTodo(name: string, uid: string) {
    const id = this.
  }
}
