import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { changeText, customIncrement } from 'src/app/state/counter/counter.actions';
import { AppState } from 'src/app/store/app.state';
import { getText } from 'src/app/state/counter/counter.selectors';

@Component({
  selector: 'app-counter-input',
  templateUrl: './counter-input.component.html'
})
export class CounterInputComponent implements OnInit {

  inputValue: number

  text: string

  selectorText: Observable<string>

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    // this.store.select('counter').subscribe(res => {
    //   console.log('text observable called')
    //   this.text = res.text
    // })

    this.selectorText = this.store.select(getText)
  }

  customIncrement() {
    this.store.dispatch(customIncrement({ value: this.inputValue }))
  }

  changeText() {
    this.store.dispatch(changeText())
  }

}
