import { CounterState } from './../../state/counter.state';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getCounter, getText } from 'src/app/state/counter.selectors';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html'
})
export class CounterOutputComponent implements OnInit {

  counter: number

  counter$: Observable<{ counter: number }>

  selectorCounter: Observable<number>

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    // this.store.select('counter').subscribe(res => {
    //   console.log('counter observable called')
    //   this.counter = res.counter
    // })

    this.selectorCounter = this.store.select(getCounter)

    this.counter$ = this.store.select('counter')
  }

}
