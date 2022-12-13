import styled from "styled-components";

const FilmsStyle = {

    TitlePage: styled.div`
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

`,

    FilmList: styled.div`
    width: 400px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    grid-gap: 12px 30px;

`,

    Film: styled.div`
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
}

export default FilmsStyle;