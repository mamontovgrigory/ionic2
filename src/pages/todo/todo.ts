import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  selector: 'page-todo',
  templateUrl: 'todo.html'
})
export class TodoPage {
  text: string;
  items: { text: string, completed: boolean }[];

  constructor(public navCtrl: NavController) {
    this.text = '';
    this.items = [];
  }

  add() {
    if (this.text) {
      this.items.push({
        completed: false,
        text: this.text
      });
      this.text = '';
    }
  }

  setCompleted(i: number, value: boolean) {
    this.items = this.items.map((item, index) => {
      if (i === index) item.completed = value;
      return item;
    });
  }

  delete(i) {
    this.items = this.items.filter((item, index) => {
      return i !== index;
    });
  }

}
