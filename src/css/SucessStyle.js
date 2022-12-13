import styled from "styled-components";

const SucessStyle = {
    TitlePage : styled.div`
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
    
`,
SessionInfo : styled.div`
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

`,

 Session : styled.div`
    height: 110px;
    width: 374px; 
    border-radius: nullpx;    
`,

 Home : styled.div`
    width: 400px;
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
}


export default SucessStyle;