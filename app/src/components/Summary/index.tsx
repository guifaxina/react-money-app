import { Container } from "./styles";
import iconEntrada from '../../assets/Entradas.svg'
import iconSaida from '../../assets/Saídas.svg'
import iconTotal from '../../assets/Total$.svg'

export function Summary() {
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={iconEntrada} alt="ícone de entrada" />
                </header>

                <strong>R$1000,00</strong>
            </div>

            <div>
                <header>
                    <p>Saídas</p>
                    <img src={iconSaida} alt="ícone de entrada" />
                </header>

                <strong>- R$800,00</strong>
            </div>

            <div className="highlight">
                <header>
                    <p>Total</p>
                    <img src={iconTotal} alt="ícone de entrada" />
                </header>

                <strong>R$200,00</strong>
            </div>
        </Container>
    )
} 