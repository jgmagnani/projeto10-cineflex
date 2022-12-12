import Top from "./components/Top";
import Films from "./pages/Films";
import GlobalStyle from "./css/GlobalStyle"
import MovieTimes from "./pages/MovieTimes";
import Seats from "./pages/Seats";
import { useEffect, useState } from "react";
import Sucess from "./pages/Sucess";
import axios from "axios";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


function App() {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [ids, setIds] = useState([]);


  return (
    <>
      <GlobalStyle />
      
      <Top />
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Films />} />
          <Route path="/sessoes/:idFilme" element={<MovieTimes />} />
          <Route path="/assentos/:idSessao" element={<Seats
            name={name}
            setName={setName}
            cpf={cpf}
            setCpf={setCpf}
            ids={ids}
            setIds={setIds}
            setSelectedSeats={setSelectedSeats} />} />
          <Route path="/sucesso" element={<Sucess 
            selectedSeats={selectedSeats}/>} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
