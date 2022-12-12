import styled from "styled-components"
import Imagem from "..//pages/image3.png"

export default function Footer(){
    return(
        <FooterAlign>
            <MovieCover>
                <img src={Imagem} />
            </MovieCover>
            <FilmDescription>
                <p>SENHOR DOS PASTEIS</p>
            </FilmDescription>
        </FooterAlign>
    )
}


const FooterAlign = styled.div`
    position: fixed;   
    bottom: 0;
    left: 0;
    height: 117px;
    width: 375px;    
    border-radius: 0px;    
    border-top: 1px solid #b6c2cd;
    background-color: #dfe6ed;
    display: flex;
    align-items: center;
    gap: 20px;
    
`

const MovieCover = styled.div`
    height: 89px;
    width: 64px;
    left: 10px;
    top: 774px;
    border-radius: 2px;
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 15px;
    img {
        height: 72px;
        width: 48px;
        left: 18px;
        top: 782px;
        border-radius: 0px;
    }

`

const FilmDescription = styled.div`
    height: 40px;
    width: 169px;
    left: 88px;
    top: 798px;
    border-radius: nullpx;
    display: flex;
    align-items: center;
    justify-content: center;   

`