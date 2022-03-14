import { State } from "../types/State";
import { Action } from "../types/Action";
import { TransactionType } from "../types/TransactionType";

export const reducer = (state: State, action: Action) => {
    switch(action.type){
        case 'setCurrentPage':
            return {...state, currentPage: action.payload};
        case 'addTransaction':
            if(state.transactions===undefined){
                let newTransactions: TransactionType[] = [action.payload];
                state.transactions = newTransactions;
                console.log('primeiro');
                console.log(state.transactions);
                return {...state};
            } else{
                //console.log(action.payload);
                /**BUG AQUI, estar inserindo duas vezes o objeto no array!*/
                state.transactions.push(action.payload);
                console.log('segundo');
                console.log(state.transactions);
                return {...state};
            }
    }
}