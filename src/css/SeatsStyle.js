import styled from "styled-components";

const SeatsStyle = {

    ScreenSeats: styled.div`
width: 400px;
min-width: 400px;
min-height: 100vh;  
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
margin: 0px;
padding-top: 50px;
padding-bottom: 120px;
`,

    Header: styled.header`
width: 400px;
min-width: 400px;
min-height: 50px;
background-color: #c3cfd9;
position: fixed;
top: 0;
display: flex;
align-items: center;
justify-content: center;
font-family: "Roboto";
font-weight: 400;
font-size: 34px;
color: #e8833a;
padding: 10px;
z-index: 1;
`,

    Title: styled.p`
height: 110px;
width: 400px;
min-width: 400px;
padding-top: 50px;
padding-bottom: 20px;
display: flex;
justify-content: center;
font-family: "Roboto";
font-weight: 400;
font-size: 24px;
line-height: 28px;
letter-spacing: 0.04em;
color: #293845;
`,


    Poster: styled.div`
width: 64px;
height: 89px;
background: #ffffff;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
border-radius: 2px;
padding: 8px;
display: flex;
align-items: center;
justify-content: center;
img {
  width: 48px;
  height: 72px;
}
`,

    SeatList: styled.div`
width: 400px;
display: flex;
flex-wrap: wrap;
padding: 10px;
text-align: center;
font-family: "Roboto";
font-style: normal;
font-weight: 400;
font-size: 11px;
line-height: 13px;
color: #000000;
`,

    Legend: styled.div`
width: 400px;
display: flex;
justify-content: space-around;
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
p {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
  display: flex;
  align-items: center;
  letter-spacing: -0.013em;
  color: #4e5a65;
  margin-top: 5px;
}
`,
    Selected: styled.button`
width: 26px;
height: 26px;
background: #1aae9e;
border: 1px solid #0e7d71;
border-radius: 12px;
display: flex;
align-items: center;
justify-content: center;
`,
    Available: styled.button`
width: 26px;
height: 26px;
background: #c3cfd9;
border: 1px solid #808f9d;
border-radius: 12px;
display: flex;
align-items: center;
justify-content: center;
`,
    Unavailable: styled.button`
width: 26px;
height: 26px;
background: #fbe192;
border: 1px solid #f7c52b;
border-radius: 12px;
display: flex;
align-items: center;
justify-content: center;
`,

    Reservation: styled.form`
width: 400px;
padding: 24px;
margin-top: 30px;
display: flex;
flex-direction: column;
align-items: flex-start;
text-decoration: none;
label {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  display: flex;
  align-items: center;
  color: #293845;
  margin-top: 10px;
}
input {
  width: 327px;
  height: 51px;
  background: #ffffff;
  border: 2px solid #d5d5d5;
  border-radius: 3px;
  font-family: "Roboto";
  font-style: italic;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  display: flex;
  align-items: center;
}
a {
  text-decoration: none;
}
button {
  width: 225px;
  height: 42px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.04em;
  color: #ffffff;
  background: #e8833a;
  border-radius: 3px;
  margin-top: 50px;
  margin-left: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-style: none;
}
`
}

export default SeatsStyle;