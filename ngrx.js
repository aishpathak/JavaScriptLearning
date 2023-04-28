/*Reducer : takes incoming actions and decide what to do with it.


*/

export function reducer(state:Tutorial[] = [initalState],action TutorialAction.Actions){
    switch(action.type){
        case TutorialActions.ADD_TUTORIAL:
            return [...state, action.payload];
            default:
                return state;
    }
}


// in your component
this.store.dispatch(new CartActions.AddItem({name:name}));

this.store.dispatch(new CartActions.RemoveItem({id:id}));

// Action
export class AddItem implements Action {
    readonly type = ADD_ITEM;
    constructor(public payload: Item){}
}

export type Actions = ADDITM | RemoveItem

/*****************Reducer  *************************************************/
// A reducer is what takes the incoming action and decides what to do with it.

import { Action } from '@ngrx/store'
import { Tutorial } from './../models/tutorial.model'
import * as TutorialActions from './../actions/tutorial.actions'

// Section 1
const initialState: Tutorial = {
    name: 'Initial Tutorial',
    url: 'http://google.com'
}

export function reducer(state: Tutorial[] = [initialState],action: TutorialActions.Actions){
    switch(action.type){
        case TutorialActions.ADD_TUTORIAL: return [...state,action.payload]
        default: return state;
    }
}


// app.state.ts

export interface AppState{
    readonly tutorial: Tutorial[];
}