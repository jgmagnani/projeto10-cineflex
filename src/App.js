import Top from "./components/Top";
import Films from "./pages/Films";
import GlobalStyle from "./css/GlobalStyle"
import MovieTimes from "./pages/MovieTimes";
import Seats from "./pages/Seats";
import { Assentos } from "./components/Assentos";
import { useState } from "react";
import Sucess from "./pages/Sucess";


function App() {
  const [selectedSeats, setSelectedSeats] = useState([]);



  return (
    <>
      <GlobalStyle/>
      <Top/>
      {/* <Films/> */}
      {/* <MovieTimes/> */}
      {/* <Seats assentos={Assentos}/> */}
      <Sucess/>
    </>
  );
}

export default App;
