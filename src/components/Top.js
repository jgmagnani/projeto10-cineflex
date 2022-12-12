import styled from "styled-components"

export default function Top(){
    return (
       
       <TopLogo>
           <h1>CINEFLEX</h1>
        </TopLogo>
    )
}

const TopLogo = styled.div`
    background: #C3CFD9;   
    width: 400px;
    height: 67px;
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
        font-family: Roboto;
        font-size: 34px;
        font-weight: 400;        
        text-align: center;
        color: #E8833A;
    }

`