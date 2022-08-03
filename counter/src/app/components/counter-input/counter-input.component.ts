import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { customIncrement } from 'src/app/state/counter.actions';
import { CounterState } from 'src/app/state/counter.state';

@Component({
  selector: 'app-counter-input',
  templateUrl: './counter-input.component.html'
})
export class CounterInputComponent implements OnInit {

  inputValue : number

  constructor(private store: Store<{ counter: CounterState }>) { }

  ngOnInit(): void {
  }

  customIncrement() {
    this.store.dispatch(customIncrement({value : this.inputValue}))
  }

}
