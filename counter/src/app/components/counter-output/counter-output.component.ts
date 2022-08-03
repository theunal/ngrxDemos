import { CounterState } from './../../state/counter.state';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html'
})
export class CounterOutputComponent implements OnInit {

  counter: number

  counter$: Observable<{ counter: number }>

  constructor(private store: Store<{ counter: CounterState }>) { }

  ngOnInit(): void {
    this.store.select('counter').subscribe(res => {
      this.counter = res.counter
    })

    this.counter$ = this.store.select('counter')
  }

}
