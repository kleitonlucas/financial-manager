import { TransactionType } from "./TransactionType";

export type Action = {
    type: 'setCurrentPage' | 'addTransaction'; /**Colocar os outros possíveos types */
    payload: any;
}