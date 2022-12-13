import axios from "axios";
import { useEffect, useState } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import SeatsStyle from "../css/SeatsStyle";
import Seat from "./Seat";
import FooterStyle from "../css/FooterStyle";


export default function Seats({ name, setName, cpf, setCpf, ids, setIds, setSelectedSeats }) {
  //console.log(assentos)
  const { idSessao } = useParams();
  const [reserve, setReserve] = useState(undefined);
  const [seatList, setSeatList] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    const request = axios.get(
      `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`
    );
    request.then((resposta) => {
      setReserve(resposta.data);
    });
    request.catch((resposta) => console.log(resposta.data));
  }, []);

  if (reserve === undefined) {
    return <p>loading...</p>;

  }

  function reservation(event) {
    event.preventDefault();
    const reserveDate = { ids, name, cpf };
    console.log(reserveDate)
    const url =
      "https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many";

    const promise = axios.post(url, reserveDate);
    //promise.then((res) => console.log(res.data));
    // promise.then(()=> navigate("/sucesso"))
    promise.then(postThen)
    promise.catch((res) => console.log(res.response.data));


  }

  function postThen(res) {
    setSelectedSeats({ title: reserve.movie.title, date: reserve.day.date, time: reserve.name, seats: seatList, name, cpf })
    navigate("/sucesso")
    setName("")
    setCpf("")
    setIds([])

  }
  
  return (
    <SeatsStyle.ScreenSeats>

      <SeatsStyle.Title>Selecione o(s) assento(s)</SeatsStyle.Title>

      <SeatsStyle.SeatList>
        {reserve.seats.map((seat) => (
          <Seat
            key={seat.id}
            name={seat.name}
            isAvailable={seat.isAvailable}
            SeatId={seat.id}
            ids={ids}
            setIds={setIds}
            seatList={seatList}
            setSeatList={setSeatList}
          />
        ))}
      </SeatsStyle.SeatList>

      <SeatsStyle.Legend>
        <div>
          <SeatsStyle.Selected></SeatsStyle.Selected>
          <p>Selecionado</p>
        </div>
        <div>
          <SeatsStyle.Available></SeatsStyle.Available>
          <p>Disponível</p>
        </div>
        <div>
          <SeatsStyle.Unavailable></SeatsStyle.Unavailable>
          <p>Indisponível</p>
        </div>
      </SeatsStyle.Legend>

      <SeatsStyle.Reservation onSubmit={reservation}>
        <label htmlFor="name">Nome do comprador:</label>
        <input          
          type="text"
          value={name}
          placeholder="Digite seu nome..."
          onChange={(e) => setName(e.target.value)}
          required
          data-test="client-name"
        />
        <label htmlFor="cpf">CPF do comprador:</label>
        <input         
          type="number"
          value={cpf}
          placeholder="Digite seu CPF..."
          onChange={(e) => setCpf(e.target.value)}
          required
          data-test="client-cpf"
        />

        <button data-test="book-seat-btn" type="submit">Reservar assento(s)</button>
      </SeatsStyle.Reservation>

      <FooterStyle.Footer data-test="footer">
        <FooterStyle.Poster>
          <img src={reserve.movie.posterURL} alt="Poster do filme" />
        </FooterStyle.Poster>
        <p>
          {reserve.movie.title} <br />{" "}
          {`${reserve.day.weekday}-${reserve.name} `}
        </p>
      </FooterStyle.Footer>

    </SeatsStyle.ScreenSeats>
  );

}
