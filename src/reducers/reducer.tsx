import { useReducer } from "react";
import { State } from "../types/State";
import { Action } from "../types/Action";

export const reducer = (state: State, action: Action) => {
    switch(action.type){
        case 'setCurrentPage':
            return {...state, currentPage: action.payload};
    }
}