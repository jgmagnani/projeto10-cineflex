import styled from "styled-components";

const MovieTimesStyle = {

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
        font-weight: 400;
        line-height: 28px;
        letter-spacing: 0.04em;
        text-align: center;

    }

`,

Schedules : styled.div`
    margin-left: 24px;
    font-family: Roboto;
    font-size: 20px;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 0.02em;
    text-align: left;
`,

Schedule : styled.div`
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


}

export default MovieTimesStyle;