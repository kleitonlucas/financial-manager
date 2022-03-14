import * as C from "./styles";
import { Theme } from "../../components/Theme";
import { useUser } from "../../hooks/useUser";
import { TransactionTable } from "../../components/TransactionTable";

export const Dashboard = () => {
    const {state, dispatch} = useUser();

    return (
        <Theme>
            <C.Container>
                <C.TopBox>
                    <h3>Parcial do Mês</h3>
                    <C.TopBoxInfos>
                        <C.Box>
                            <h4>Entrada</h4>
                            <div>1000,00 R$</div>
                        </C.Box>
                        <C.Box>
                            <h4>Saída</h4>
                            <div>400,00 R$</div>
                        </C.Box>
                        <C.Box>
                            <h4>Total</h4>
                            <div>600,00 R$</div>
                        </C.Box>
                    </C.TopBoxInfos>
                </C.TopBox>
                <C.BottomBox>
                    <C.SideLeft>
                        <h3>Movimentações Recentes</h3>
                        <C.SideLeftTable>
                            <TransactionTable />
                        </C.SideLeftTable>
                    </C.SideLeft>
                    <C.SideRight>
                        <h3>Estatísticas de Consumo</h3>
                        <C.SideRightGraphic>
                            Gráfico
                        </C.SideRightGraphic>
                    </C.SideRight>
                </C.BottomBox>
            </C.Container>
        </Theme>
    );
}