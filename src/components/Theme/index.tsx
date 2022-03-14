import { ReactNode } from "react";
import * as C from "./styles";
import { useUser } from "../../hooks/useUser";

type Props = {
    children: ReactNode
}

export const Theme = ({children}: Props) => {
    const {state, dispatch} = useUser();

    return (
        <C.Container>
            <C.Header>
                <h1>Controle Financeiro</h1>
                <C.HeaderUser>
                    <h5>{state.name}</h5>
                    <div>{/*Aqui será a imagem do usuário*/}</div>
                </C.HeaderUser>
            </C.Header>
            <C.Area>
                <C.Menu>
                    <hr />
                    <div>
                        <div>Dashboard</div>
                        <div>Transações</div>
                        <div>Metas</div>
                        <div>Estatísticas</div>
                    </div>
                    <button>Modo Light</button>
                    <hr />
                </C.Menu>
                
                <C.Content>
                    {children}
                </C.Content>
            </C.Area>
            <C.Footer>
                © Kleiton Lucas - 2022
            </C.Footer>
        </C.Container>
    );
}