import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import styled from "styled-components"
import Footer from "../components/Footer"


export default function MovieTimes() {
    const { idFilm } = useParams();
    const [sessions, setSessions] = useState(undefined);


    useEffect(() => {
        const request = axios.get(
            `https://mock-api.driven.com.br/api/v8/cineflex/movies/2/showtimes`
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
            <TitlePage>
                <h2>Selecione o horário</h2>
            </TitlePage>

            {sessions.days.map((session) => (
                <Schedules key={session.id} data-test="movie-day">
                    {session.weekday}
                    <Schedule>
                        {session.showtimes.map((time) => (
                            <Link to={`/assentos/${time.id}`} key={time.id} data-test="showtime">
                                <button >{time.name}</button>
                            </Link>
                        ))}
                    </Schedule>
                </Schedules>
            ))}           

            <Footer />
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
        font-weight: 400;
        line-height: 28px;
        letter-spacing: 0.04em;
        text-align: center;

    }

`
const Schedules = styled.div`
    margin-left: 24px;
    font-family: Roboto;
    font-size: 20px;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 0.02em;
    text-align: left;
`
const Schedule = styled.div`
    display: flex;
    margin-bottom: 30px;
    button {
        height: 43px;
        width: 83px;
        left: 114px;
        top: 227px;
        border-radius: 3px;
        background: #E8833A;
        color: white;
        border-style: none;
        margin-right: 10px;
        
    }
`