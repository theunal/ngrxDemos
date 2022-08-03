import { AppState } from './../../store/app.state';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from 'src/app/state/counter.actions';
import { CounterState } from 'src/app/state/counter.state';
import { addPost } from 'src/app/state/post/post.action';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html'
})
export class CounterButtonsComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  increment() {
    this.store.dispatch(increment())
  }

  decrement() {
    this.store.dispatch(decrement())
  }

  reset() {
    this.store.dispatch(reset())
  }
}
