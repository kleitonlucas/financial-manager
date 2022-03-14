import { ChangeEvent } from "react";
import { Theme } from "../../components/Theme";
import { TransactionTable } from "../../components/TransactionTable";
import { useUser } from "../../hooks/useUser";
import { TransactionType } from "../../types/TransactionType";
import * as C from "./styles";

export const Transactions = () => {
    const {state, dispatch} = useUser();
    let inputCategory = '', inputDate = '', inputValue = '', inputType = '';

    const clearFields = () => {
        /**Ver uma forma de limpar os campos */
    }

    const changeCategory = (e: ChangeEvent<HTMLSelectElement>) => {
        inputCategory = e.target.value;
    }

    const changeDate = (e: ChangeEvent<HTMLInputElement>) => {
        inputDate = e.target.value;
    }

    const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
        inputValue = e.target.value;
    }

    const changeType = (e: ChangeEvent<HTMLSelectElement>) => {
        inputType = e.target.value;
    }
    
    const handleAddTransaction = () => {
        if(inputValue!=='' && inputCategory!=='' && inputDate!=='' && inputType!==''){
            let newTransaction = {
                id: 1,
                userId: state.id,
                type: inputType,
                date: inputDate,
                value: inputValue,
                category: inputCategory
            };
            dispatch({
                type: 'addTransaction',
                payload: newTransaction
            });
        }else {
            console.log('Preencha todos os campos');
        }
    }

    return (
        <Theme>
            <C.Container>
                <C.TopBox>
                    <h3>Adicionar uma nova transação</h3>
                    <C.Fields>
                        <div>
                            <input type='text' placeholder='Valor' onChange={changeValue} className='data-inputs'/>
                        </div>
                        <div>
                            <select name='type' onChange={changeType} className='data-inputs'>
                                <option value=''></option>
                                <option value='gain'>Ganho</option>
                                <option value='spent'>Gasto</option>
                            </select>
                        </div>
                        <div>
                            <select name="category" onChange={changeCategory} className='data-inputs'>
                                <option value=''></option>
                                <option value='salary'>Salário</option>
                                <option value='extra'>Renda Extra</option>
                                <option value='investment'>Investimentos</option>
                                <option value='clothing'>Vestuário</option>
                                <option value='supermarket'>Supermercado</option>
                                <option value='fastFood'>Fast Food</option>
                                <option value='ownTransport'>Transporte Próprio</option>
                                <option value='publicTransportation'>Transporte Público</option>
                                <option value='fuel'>Combustível</option>
                            </select>
                        </div>
                        <div>
                            <input type='date' onChange={changeDate} className='data-inputs'/>
                        </div>                        
                    </C.Fields>
                    <C.ButtonFields>
                        <button onClick={handleAddTransaction}>Adicionar</button>
                    </C.ButtonFields>
                </C.TopBox>
                <C.BottomBox>
                    {state.transactions!==undefined &&
                        //console.log(state.transactions)
                        <div>
                            {state.transactions.map((item, index)=>(
                                <TransactionTable key={index} transaction={item}/>
                            ))}
                        </div>
                    }
                    {state.transactions===undefined &&
                        <div>Não possuí transações</div>
                    }
                </C.BottomBox>
            </C.Container>
        </Theme>
    );
}