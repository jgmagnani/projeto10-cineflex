import styled from "styled-components";

const FooterStyle = {
    Footer: styled.footer`
  width: 400px;
  min-width: 400px;
  min-height: 117px;
  background-color: #c3cfd9;
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 10px;
  z-index: 1;
  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    line-height: 30px;
    color: #293845;
    margin-left: 10px;
  }
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
`
}

export default FooterStyle;