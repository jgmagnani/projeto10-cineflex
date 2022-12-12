import { Link } from "react-router-dom";
import styled from "styled-components"

export default function Sucess({ selectedSeats }) {
    if (selectedSeats.seats === undefined) {
        return <p>L O A D I N G ...</p>;
    }

    return (
        <>
            <TitlePage>
                <h2>Pedido feito <br></br>
                    com sucesso
                </h2>
            </TitlePage>

            <SessionInfo>
                <Session data-test="movie-info">
                    <h1>Filme e sessão</h1>
                    <h2>{selectedSeats.title}</h2>
                    <h2>{`${selectedSeats.date} ${selectedSeats.time}`}</h2>
                </Session>

                <Session data-test="seats-info">
                    <h1>Ingressos</h1>
                    <h2>
                        {selectedSeats.seats.map((id) => (
                        <p key={id}>{`assento ${id}`}</p>
                    ))}
                    </h2>
                </Session>

                <Session data-test="client-info">
                    <h1>Comprador</h1>
                    <h2>{`Nome: ${selectedSeats.name}`}</h2>
                    <h2>{`CPF: ${selectedSeats.cpf}`}</h2>
                </Session>

            </SessionInfo>
            <Link to="/" data-test="go-home-btn">
                <Home>
                    <button>Voltar para Home</button>
                </Home>
            </Link>

        </>

    )
}

const TitlePage = styled.div`
    height: 110px;
    width: 374px;
    left: 0px;
    top: 67px;
    border-radius: nullpx;
    display: flex;
    align-items: center;
    justify-content: center;
    h2 {
        font-family: Roboto;
        font-size: 24px;
        font-weight: 700;
        line-height: 28px;
        letter-spacing: 0.04em;
        text-align: center;
        color: #247A6B;

    }
    
`
const SessionInfo = styled.div`
    margin-left: 26px;
    h1{        
        font-family: Roboto;
        font-size: 24px;
        font-weight: 700;
        line-height: 28px;
        letter-spacing: 0.04em;
        text-align: left;
    }

    h2 {
        font-family: Roboto;
        font-size: 22px;
        font-weight: 400;
        line-height: 26px;
        letter-spacing: 0.04em;
        text-align: left;

    }

`

const Session = styled.div`
    height: 110px;
    width: 374px; 
    border-radius: nullpx;    
`

const Home = styled.div`
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 37px;
    button{
        height: 42px;
        width: 225px;
        left: 74px;
        top: 622px;
        border-radius: 3px;
        background: #E8833A;
        color: #FFFFFF;
        border-style: none;
    }
`