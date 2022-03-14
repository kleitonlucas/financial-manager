import { createContext, ReactNode, useReducer } from "react";
import { reducer } from "../reducers/reducer";
import { ContextType } from "../types/ContextType";
import { State } from "../types/State";

type UserProviderProps = {
    children: ReactNode
}

const initialData: State = {
    id: 1001,
    name: 'Kleiton Lucas',
    currentPage: 'dashboard',
    transactions: undefined
}

export const UserContext = createContext<ContextType | undefined>(undefined);

export const UserProvider = ({children}: UserProviderProps) => {
    const [state, dispatch] = useReducer(reducer, initialData);
    const value = {state, dispatch};
    
    return(
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
}