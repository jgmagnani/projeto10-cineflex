import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


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
            <TitlePage>
                <h2>Selecione o filme</h2>
            </TitlePage>

            <FilmList>
                {filmsList.map((movie) => (
                    <Film key={movie.id} data-test="movie">
                        <Link to={`/sessoes/${movie.id}`}>
                            <img src={movie.posterURL} alt="Poster do filme" />
                        </Link>
                    </Film>
                ))}               

            </FilmList>
        </>
    );
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

const FilmList = styled.div`
    width: 375px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    grid-gap: 12px 30px;

`

const Film = styled.div`
    height: 209px;
    width: 145px;
    left: 30px;
    top: 169px;
    border-radius: 3px;
    box-shadow: 0px 2px 4px 2px #0000001A;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        height: 193px;
        width: 129px;
        left: 38px;
        top: 177px;
        border-radius: 0px;
    }




`