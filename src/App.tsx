import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
//importing react slick slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { animateScroll } from "react-scroll";
import NavBar from "./components/organs/NavBar"
import Home from "./components/pages/Home";
import Footer from "./components/organs/Footer";
import { AureaResidencial } from "./components/pages/empreendimentos/AureaResidencial";
import { ConquistaResidencial } from "./components/pages/empreendimentos/ConquistaResidencial";
import { BeijaFlorResidencial } from "./components/pages/empreendimentos/BeijaflorResidencial";



function App() {

  const directory = useLocation();
  useEffect(() => {
    animateScroll.scrollToTop({
      duration: 0,
    });
  }, [directory.pathname]);

  return (
    <div className="w-full h-full bg-zinc-900 text-white font-nunito relative">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aurea-residencial" element={<AureaResidencial />} />
        <Route path="/conquista-residencial" element={<ConquistaResidencial />} />
        <Route path="/beija-flor-residencial" element={<BeijaFlorResidencial />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
