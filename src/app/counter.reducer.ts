
import {Action} from '@ngrx/store';
import * as COUNTERACTION from './actions/counter.actions';



    export const CounterReducer = (state: number = 0  , action: Action  ) => {
       switch (action.type) {
            case COUNTERACTION.INCREMENT:
                return state = state + 1;

            case COUNTERACTION.DECREMENT:
                return state = state - 1;

            case COUNTERACTION.PLUS:
                return state = state + (<COUNTERACTION.PlusAction>action).payload;

            case COUNTERACTION.RESET:
                return 0;

            default:
                return state;
        }
     }