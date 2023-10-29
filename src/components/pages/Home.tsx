import About from "../organs/About"
import HeroSection from "../organs/HeroSection"

import HeroImg1 from "../../assets/hero/compras1.jpg";
import HeroImg2 from "../../assets/hero/compras2.gif";
import HeroImg3 from "../../assets/hero/compras3.jpg";

const Home = () => {
    const HeroTexts = [
        {
            Heading: "Bem vindos ao nosso site!",
            Paragraph: "aqui você encontra as melhores ofertas de imóveis da região",
            Button: "",
            image: HeroImg1,
        },
        {
            Heading: "Financiamento facilitado",
            Paragraph: "com as melhores taxas do mercado",
            Button: "",
            image: HeroImg2,
        },
        {
            Heading: "Compra de imóveis",
            Paragraph: "com a melhor assessoria do mercado",
            Button: "",
            image: HeroImg3,
        }
    ];
    return (
        <>
            <HeroSection HeroTexts={HeroTexts} />
            <About />
            {/* <Offers /> */}
            {/* <Membership /> */}
            {/* <Calculator /> */}
            {/* <Testimonials /> */}
            {/* <Blogs /> */}
            {/* <Contact /> */}
        </>
    )
}

export default Home