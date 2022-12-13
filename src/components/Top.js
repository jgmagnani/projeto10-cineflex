import { Link, useNavigate } from "react-router-dom"
import TopStyle from "../css/TopStyle";

export default function Top() {

    let local = window.location.href;
    let navigate = useNavigate();

    function handleClick() {
        navigate(-1)
    }
    console.log(window.location.href)
    
    if (!local.includes("sessoes") && !local.includes("assentos") && !local.includes("sucesso")) {
        return (
            <TopStyle.TopLogo>           
                <h1>CINEFLEX</h1>
            </TopStyle.TopLogo>
        )
    }

    return (

        <TopStyle.TopLogo>
            <a onClick={handleClick}>
                <ion-icon name="arrow-back-outline"></ion-icon>
            </a>
            <h1>CINEFLEX</h1>
        </TopStyle.TopLogo>
    )
}
