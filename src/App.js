import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import CardsDetail from "./Components/CardsDetail";
import Card from "./Components/Cards";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Card />} />
        <Route path="/cart/:id" element={<CardsDetail />} />
      </Routes>
    </>
  );
}

export default App;
