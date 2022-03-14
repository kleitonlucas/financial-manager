import { TransactionType } from "./TransactionType";

export type State = {
    id: number,
    name: string,
    currentPage: string,
    transactions: TransactionType[] | undefined;
}