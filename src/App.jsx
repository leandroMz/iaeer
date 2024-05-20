import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from './navBar/NavBar';
import { Footer } from "./footer/Footer";
import { Home } from "./routes/home/Home";
import { ResearchCenter } from "./routes/researchCenter/ResearchCenter";
import { Faqs } from "./routes/faqs/Faqs";
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/centro_de_investigacion' element={<ResearchCenter />} />
        <Route path="/preguntas_frecuentes" element={<Faqs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
