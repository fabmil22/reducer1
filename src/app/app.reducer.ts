
import { ActionReducerMap } from '@ngrx/store';
import {CounterReducer } from './counter.reducer';

export interface Appstate {

    counter: number;

}


export  const rooTreducer: ActionReducerMap<Appstate> = {
    counter :  CounterReducer
}