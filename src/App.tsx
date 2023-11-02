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
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactPixel from 'react-facebook-pixel';
import { Link } from "react-router-dom";
import { PoliticaDePrivacidade } from "./components/pages/PoliticaDePrivacidade";

function App() {
  // const advancedMatching = { em: 'some@email.com' }; // optional, more info: https://developers.facebook.com/docs/facebook-pixel/advanced/advanced-matching
  const options = {
    autoConfig: true, // set pixel's autoConfig. More info: https://developers.facebook.com/docs/facebook-pixel/advanced/
    debug: false, // enable logs
  };
  ReactPixel.init('1101028314608880', undefined, options);
  ReactPixel.revokeConsent();
  useEffect(() => {
    const cookie = getCookieConsentValue("acepptedCookiesRocha1101028314608880") == "true";
    if (cookie) ReactPixel.grantConsent();
  })
  const directory = useLocation();
  useEffect(() => {
    animateScroll.scrollToTop({
      duration: 0,
    });
  }, [directory.pathname]);

  function onAcceptCookie(): ((acceptedByScrolling: boolean) => void) | undefined {
    return (acceptedByScrolling) => {
      if (acceptedByScrolling) {
        // triggered if user scrolls past threshold
        alert("Accept was triggered by user scrolling");
      }
      ReactPixel.grantConsent()
    };
  }

  return (
    <div className="w-full h-full bg-zinc-900 text-white font-nunito relative">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aurea-residencial" element={<AureaResidencial />} />
        <Route path="/conquista-residencial" element={<ConquistaResidencial />} />
        <Route path="/beija-flor-residencial" element={<BeijaFlorResidencial />} />
        <Route path="/politica" element={<PoliticaDePrivacidade />} />
      </Routes>
      <Footer />
      <CookieConsent
        location="bottom"
        buttonText="Aceito"
        cookieName="acepptedCookiesRocha1101028314608880"
        acceptOnScroll={false}
        onAccept={onAcceptCookie}
      >
        Este site utiliza cookies para melhorar a experiência do usuário.
        <br />
        <small>confira nossa <Link to={"/politica"} className="text-cyan-500 hover:underline">Politica de privacidade</Link> e entenda porque utilizamos cookies.</small>
      </CookieConsent>
    </div>
  )
}

export default App
