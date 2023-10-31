
import Caracteristicas, { CaracteristicasTextTyte } from '../../organs/Caracteristicas';
import HeroSlider from '../../organs/HeroSlider';

import Fachada from '../../../assets/images/empreendimentos/aurea-residencial/fachada.jpg';
import FachadaNoturna from '../../../assets/images/empreendimentos/aurea-residencial/fachada-noturna.jpg';
import Piscina from '../../../assets/images/empreendimentos/aurea-residencial/piscina.jpg';
import Academia from '../../../assets/images/empreendimentos/aurea-residencial/academia.jpg';
import QuadraEsportes from '../../../assets/images/empreendimentos/aurea-residencial/quadra-esportes-infantil.jpg';
import AureaLogo from '../../../assets/images/empreendimentos/aurea-residencial/aurea-logo.webp';
import Membership from '../../organs/Membership';
import PromotionalVideo from '../../organs/PromotionalVideo';
import Contact from '../../organs/Contact';

export function AureaResidencial() {
    const HeroTexts = [
        {
            Heading: "Apartamentos de 2 e 3 quartos",
            Paragraph: "Com suíte, cozinha americana, varanda e uma vaga.",
            Button: "string",
            image: Fachada,
        },
        {
            Heading: "Os espaços são iluminados e arejados",
            Paragraph: "Proporcionando muito mais conforto e bem-estar para você e sua família.",
            Button: "string",
            image: FachadaNoturna,
        },
        {
            Heading: "Uma área de lazer incrível",
            Paragraph: "Com opções para você e sua família se divertirem o ano inteiro.",
            Button: "string",
            image: Piscina,
        },
        {
            Heading: "Manter a saúde em dia nunca foi tão fácil",
            Paragraph: "A academia do Aurea Residencial é completa e está sempre à sua disposição.",
            Button: "string",
            image: Academia,
        },
        {
            Heading: "Aproveite os dias de sol",
            Paragraph: "Com a quadra de esportes do Aurea Residencial, você e sua família podem se divertir sem sair de casa.",
            Button: "string",
            image: QuadraEsportes,
        },

    ];
    const MembershipPlans = {
        firstText: "Disponibilidade",
        secondText: "Escolha o melhor para você",
        cards: [
            {
                amount: 0,
                unity: "",
                caption: "3 quartos",
                benefits: [
                    "Condomínio com lazer completo",
                    "3 quartos",
                    "vaga de garagem",
                    "piscina",
                    "playground",
                    "salão de festas",
                    "quadra poliesportiva",
                    "academia",

                ],
                contactMsg: "Gostaria de saber mais sobre os apartamentos de 3 quartos no Aurea Residencial."
            },
            {
                amount: 280,
                unity: "mil",
                caption: "2 quartos a partir de",
                benefits: [
                    "Condomínio com lazer completo",
                    "2 quartos",
                    "vaga de garagem",
                    "piscina",
                    "playground",
                    "salão de festas",
                    "quadra poliesportiva",
                    "academia",
                ],
                contactMsg: "Gostaria de saber mais sobre os apartamentos de 2 quartos no Aurea Residencial."
            },
        ]
    }
    const TourVideoTexts = {
        firstText: "Tour Virtual",
        paragraph: "Conheça o empreendimento sem sair de casa.",
        videoUrl: "https://www.youtube.com/embed/hAakwQTAtxk?si=y6-aH7HSVihumIGS"
    }
    const caracteristicasText: CaracteristicasTextTyte = {
        header: "Características do Aurea Residencial",
        list: [
            { title: "Piscina Adulto Com Raia" },
            { title: "Piscina Infantil" },
            { title: "Playground", },
            { title: "Quadra De Esportes Infantil" },
            { title: "2 Churrasqueiras" },
            { title: "Academia" },
            { title: "Bicicletário" },
            { title: "Salão De Festas" }
        ]
    };
    const PromotionalVideoTexts = {
        firstText: "Conheça o condomínio",
        paragraph: "",
        videoUrl: "https://www.youtube.com/embed/p6Z1a4u4byM?si=FmFShYFNvQnh-1W-"
    }
    const ContactTexts = {
        firstText: "Contato",
        phone: "(21) 9 7574-9247",
        paragraph: "Entre em contato conosco para saber mais sobre o Aurea Residencial.",
        button: "Faça uma simulação",
        whatsappMsg: "Olá, gostaria de fazer uma simulação para o Aurea Residencial."
    }
    return (
        <div className="min-h-screen">
            <HeroSlider HeroTexts={HeroTexts} >
                <div className="w-screen bg-[#EDAA04] p-5">
                    <div className="pl-16 md:pl-36">
                        <img src={AureaLogo} alt="Aurea logo" />
                    </div>
                </div>
            </HeroSlider>
            <PromotionalVideo PromotionalVideoTexts={TourVideoTexts} />
            <Caracteristicas texts={caracteristicasText} className='bg-amber-900' />
            <PromotionalVideo PromotionalVideoTexts={PromotionalVideoTexts} />
            <Membership MembershipPlans={MembershipPlans} />
            <Contact ContactTexts={ContactTexts} />
        </div>
    )
}