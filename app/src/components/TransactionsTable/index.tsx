import { useEffect } from "react";
import { api } from "../services/api";
import { Container } from "./styles";


export function TransactionsTable() {
    useEffect(() => {
        api.get('transactions')
        .then(res => console.log(res.data))
    }, [])

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Pro labore</td>
                        <td className="deposit">R$12.000</td>
                        <td>Desenvolvimento</td>
                        <td>08/11/2022</td>
                    </tr>
                </tbody>

                <tbody>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">-R$1.200</td>
                        <td>Casa</td>
                        <td>05/09/2022</td>
                    </tr>
                </tbody>
                
            </table>
        </Container>
    );
};