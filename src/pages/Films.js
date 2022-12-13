import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FilmsStyle from "../css/FilmsStyle";


export default function Films() {
    const [filmsList, setFilmsList] = useState(undefined);

    useEffect(() => {
        const request = axios.get(
            "https://mock-api.driven.com.br/api/v8/cineflex/movies"
        );
        request.then((resposta) => {
            setFilmsList(resposta.data);
        });
        request.catch((resposta) => console.log(resposta.data));
    }, []);

    if (filmsList === undefined) {
        return <p>L O A D I N G . . .</p>;
    }

    return (
        <>
            <FilmsStyle.TitlePage>
                <h2>Selecione o filme</h2>
            </FilmsStyle.TitlePage>

            <FilmsStyle.FilmList>
                {filmsList.map((movie) => (
                    <FilmsStyle.Film key={movie.id} data-test="movie">
                        <Link to={`/sessoes/${movie.id}`}>
                            <img src={movie.posterURL} alt="Poster do filme" />
                        </Link>
                    </FilmsStyle.Film>
                ))}               

            </FilmsStyle.FilmList>
        </>
    );
}

