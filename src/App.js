import Top from "./components/Top";
import Films from "./pages/Films";
import GlobalStyle from "./css/GlobalStyle"
import MovieTimes from "./pages/MovieTimes";
import Seats from "./pages/Seats";
import { Assentos } from "./components/Assentos";
import { useEffect, useState } from "react";
import Sucess from "./pages/Sucess";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [filmsList, setFilmsList] = useState([])
  
  useEffect(() => {
		const requisicao = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies");

		requisicao.then(resposta => {
			setFilmsList(resposta.data);
    requisicao.catch("Deu erro em algo")
		});
	}, []);
  console.log(filmsList)

  return (
    <>
      <GlobalStyle/>
      <Top/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Films/>}/>
          {/* <MovieTimes/> */}
          {/* <Seats assentos={Assentos}/> */}
          {/* <Sucess/> */}
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
