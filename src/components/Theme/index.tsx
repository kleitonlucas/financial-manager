import { ReactNode } from "react";
import * as C from "./styles";

type Props = {
    children: ReactNode
}

export const Theme = ({children}: Props) => {
    return (
        <C.Container>
            <C.Header>
                <h1>KL Financial Manager</h1>
                <div></div>
            </C.Header>
            <C.Area>
                <C.Menu>
                    <hr />
                    <div>
                        <div>Dashboard</div>
                        <div>Créditos</div>
                        <div>Débitos</div>
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