import { useContext } from "react"
import { UserContext } from "../contexts/UserContext"

export const useUser = () => {
    const context = useContext(UserContext);
    if(context === undefined){
        throw new Error('useUser deve ser usado dentro do UserProvider');
    }
    return context;
}