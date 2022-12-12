import styled from "styled-components"

export default function Sucess(){
    return(
        <>
            <TitlePage>
                <h2>Pedido feito <br></br>
                    com sucesso
                </h2>
            </TitlePage>

            <SessionInfo>
                <Session>
                    <h1>Filme e sessão</h1>
                    <h2>Enola Holmes</h2>
                    <h2>24/12/2022</h2>
                </Session>

                <Session>
                    <h1>Ingressos</h1>
                    <h2>Assento 15</h2>
                    <h2>Assento 16</h2>
                </Session>

                <Session>
                    <h1>Comprador</h1>
                    <h2>Enola Holmes</h2>
                    <h2>24/12/2022</h2>
                </Session>

            </SessionInfo>

            <Home>
                <button>Voltar para Home</button>
            </Home>
        
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