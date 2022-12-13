import { Link } from "react-router-dom";
import SucessStyle from "../css/SucessStyle";

export default function Sucess({ selectedSeats }) {
    if (selectedSeats.seats === undefined) {
        return <p>L O A D I N G ...</p>;
    }

    return (
        <>
            <SucessStyle.TitlePage>
                <h2>Pedido feito <br></br>
                    com sucesso
                </h2>
            </SucessStyle.TitlePage>

            <SucessStyle.SessionInfo>
                <SucessStyle.Session data-test="movie-info">
                    <h1>Filme e sessão</h1>
                    <h2>{selectedSeats.title}</h2>
                    <h2>{`${selectedSeats.date} ${selectedSeats.time}`}</h2>
                </SucessStyle.Session>

                <SucessStyle.Session data-test="seats-info">
                    <h1>Ingressos</h1>
                    <h2>
                        {selectedSeats.seats.map((id) => (
                        <p key={id}>{`assento ${id}`}</p>
                    ))}
                    </h2>
                </SucessStyle.Session>

                <SucessStyle.Session data-test="client-info">
                    <h1>Comprador</h1>
                    <h2>{`Nome: ${selectedSeats.name}`}</h2>
                    <h2>{`CPF: ${selectedSeats.cpf}`}</h2>
                </SucessStyle.Session>

            </SucessStyle.SessionInfo>
            <Link to="/" data-test="go-home-btn">
                <SucessStyle.Home>
                    <button>Voltar para Home</button>
                </SucessStyle.Home>
            </Link>

        </>

    )
}

