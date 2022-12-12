import styled from "styled-components";
import Footer from "../components/Footer";


export default function Seats({ assentos }) {
    //console.log(assentos)
    return (
        <SeatPage>
            <TitlePage>
                <h2>Selecione o(s) assento(s)</h2>
            </TitlePage>

            <SeatList>
                {assentos.map((e) =>
                    <Seat key={e.id}>
                        <p>{e.name}</p>
                    </Seat>
                )}
            </SeatList>

            <SeatColors>
                <SeatGreen></SeatGreen>

                <SeatGrey></SeatGrey>

                <SeatYellow></SeatYellow>
            </SeatColors>

            <ColorDesc>
                <p>Disponível</p>
                <p>Selecionado</p>
                <p>Indisponível</p>
            </ColorDesc>

            <Infos>
                <h2>Nome do comprador:</h2>

                <input type="text" placeholder="Digite seu nome"></input>

                <h2>CPF do comprador:</h2>

                <input type="number" placeholder="Digite seu CPF"></input>

            </Infos>

            <Footer />
        </SeatPage>
    )
}

const SeatPage = styled.div`
    width: 375px;
    
`

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

const SeatList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;    
    margin-left: 24px;
    margin-right: 24px;
    gap: 6px;
`

const Seat = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 26px;
    width: 26px;
    left: 24px;
    top: 202px;
    border-radius: 12px;
    background: #c3cfd9;
    border: 1px solid #808f9d;
    p{
        color: #FFFFFF;
    }

`

const SeatColors = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 20px;
`
const ColorDesc = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 3px;
`

const SeatGreen = styled.div`
    height: 25px;
    width: 25px;
    left: 78px;
    top: 377px;
    border-radius: 17px; 

    background-color: #1aae9e ;
`
const SeatGrey = styled.div`
    background-color: #c3cfd9 ;

    height: 25px;
    width: 25px;
    left: 78px;
    top: 377px;
    border-radius: 17px;

`

const SeatYellow = styled.div`
    height: 25px;
    width: 25px;
    left: 78px;
    top: 377px;
    border-radius: 17px;

    background-color: #fbe192 ;
`

const Infos = styled.div`
    margin-left: 24px;
    margin-top: 40px;
    margin-bottom: 135px;
    h2{
        height: 25px;
        width: 327px;
        left: 24px;
        top: 472px;
        font-family: Roboto;
        font-size: 18px;
        font-weight: 400;
        line-height: 21px;
        letter-spacing: 0em;
        text-align: left;
    }
    input{
        height: 51px;
        width: 327px;
        left: 24px;
        top: 497px;
        border-radius: 3px;
        border: 1px solid #D4D4D4;
        font-family: Roboto;
        font-size: 18px;
        font-style: italic;
        font-weight: 400;
        line-height: 21px;
        letter-spacing: 0em;
        text-align: left;
        margin-bottom: 8px;

    }
`