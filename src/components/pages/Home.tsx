import About from "../organs/About"
import HeroSection from "../organs/HeroSection"

import HeroImg1 from "../../assets/hero/compras1.jpg";
import HeroImg2 from "../../assets/hero/compras2.gif";
import HeroImg3 from "../../assets/hero/compras3.jpg";
import Offers from "../organs/Offers";
import Membership from "../organs/Membership";

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
    const MembershipPlans = {
        firstText: "Empreendimentos",
        secondText: "Escolha o melhor para você",
        cards: [
            {
                amount: 499,
                duration: "mensais",
                caption: "Casas a partir de",
                benefits: [
                    "Condomínio fechado",
                    "2 quartos",
                    "vaga de garagem",
                ],
                contactMsg: "Gostaria de conhecer as casas disponíveis."
            },
            {
                amount: 600,
                duration: "mensais",
                caption: "Apartamentos a partir de",
                benefits: [
                    "Condomínio com lazer completo",
                    "2 e 3 quartos",
                    "vaga de garagem",
                    "piscina",
                    "playground",
                    "salão de festas",
                    "quadra poliesportiva",
                    "academia",

                ],
                contactMsg: "Gostaria de conhecer os apartamentos disponíveis."
            },
            {
                amount: 0,
                duration: "",
                caption: "Empreendimentos prontos",
                benefits: [
                    "Casas",
                    "Apartamentos",
                    "Com lazer completo",
                    "Financiamento facilitado",
                ],
                contactMsg: "Gostaria de conhecer os empreendimentos disponíveis."
            }
        ]
    }
    return (
        <>
            <HeroSection HeroTexts={HeroTexts} />
            <About />
            <Offers />
            <Membership MembershipPlans={MembershipPlans} />
            {/* <Calculator /> */}
            {/* <Testimonials /> */}
            {/* <Blogs /> */}
            {/* <Contact /> */}
        </>
    )
}

export default Home