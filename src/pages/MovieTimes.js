import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import MovieTimesStyle from "../css/MovieTimesStyle";
import FooterStyle from "../css/FooterStyle";


export default function MovieTimes() {
    const { idFilme } = useParams();
    const [sessions, setSessions] = useState(undefined);


    useEffect(() => {
        const request = axios.get(
            `https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`
        );
        request.then((resposta) => {
            setSessions(resposta.data);
        });
        request.catch((resposta) => console.log(resposta.data));
    }, []);

    if (sessions === undefined) {
        return <p>loading...</p>;
    }


    return (
        <>
            <MovieTimesStyle.TitlePage>
                <h2>Selecione o horário</h2>
            </MovieTimesStyle.TitlePage>

            {sessions.days.map((session) => (
                <MovieTimesStyle.Schedules key={session.id} data-test="movie-day">
                    {session.weekday}
                    <MovieTimesStyle.Schedule>
                        {session.showtimes.map((time) => (
                            <Link to={`/assentos/${time.id}`} key={time.id} data-test="showtime">
                                <button >{time.name}</button>
                            </Link>
                        ))}
                    </MovieTimesStyle.Schedule>
                </MovieTimesStyle.Schedules>
            ))}

            <FooterStyle.Footer data-test="footer">
                <FooterStyle.Poster>
                    <img src={sessions.posterURL} alt="Poster do filme" />
                </FooterStyle.Poster>
                <p>{sessions.title}</p>
            </FooterStyle.Footer>F
        </>
    )
}

