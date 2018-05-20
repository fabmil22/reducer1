import { Component } from '@angular/core';
import { Store} from '@ngrx/store';
import {Appstate} from './app.reducer';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contador: number;
  title = 'app';
  constructor( private store: Store<Appstate>){

  this.readStateSoere ();
  }

  readStateSoere () {

    this.store.select('counter').subscribe(
      res => this.contador = res
    )
  }
}
