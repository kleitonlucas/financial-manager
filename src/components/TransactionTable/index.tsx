import { useUser } from "../../hooks/useUser";
import { TransactionType } from "../../types/TransactionType";
import * as C from "./styles";

type Props = {
    transaction: TransactionType
}

export const TransactionTable = ({transaction}: Props) => {
    const {state, dispatch} = useUser();

    return (
        <C.Container>
            {transaction.id} - 
            {transaction.userId} - 
            {transaction.value} - 
            {transaction.type} - 
            {transaction.category}
        </C.Container>
    );
}