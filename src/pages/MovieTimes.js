import styled from "styled-components"
import Footer from "../components/Footer"

export default function MovieTimes(){
    return(
        <>
            <TitlePage>            
                <h2>Selecione o horário</h2>
            </TitlePage>
            <Schedules>
                <Schedule>
                    <h3>Quinta-Feira - 24/12/2022</h3>
                    <Hours>
                        <button>
                            15:00
                        </button>
                        <button>
                            19:00
                        </button>
                    </Hours>
                </Schedule>
                
                <Schedule>
                    <h3>Sexta-Feira - 25/12/2022</h3>
                    <Hours>
                        <button>
                            15:00
                        </button>
                        <button>
                            19:00
                        </button>
                    </Hours>
                </Schedule>
            </Schedules>

            <Footer/>
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
const  Schedules =  styled.div`
    

`
const Schedule = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 23px;
    margin-left: 24px;
    h3{
        height: 35px;
        width: 241px;
        left: 24px;
        top: 170px;
        border-radius: nullpx;
    }


`

const Hours = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    margin-right: 10px;
    
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