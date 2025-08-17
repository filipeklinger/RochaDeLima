import Caracteristicas, { CaracteristicasTextTyte } from '../../organs/Caracteristicas';
import HeroSlider from '../../organs/HeroSlider';

import Fachada from '../../../assets/images/empreendimentos/kastell/fachadadia.jpg';
import FachadaNoturna from '../../../assets/images/empreendimentos/kastell/fachadanoite.jpg';
import Piscina from '../../../assets/images/empreendimentos/kastell/piscina.jpg';
import Academia from '../../../assets/images/empreendimentos/kastell/academia.jpg';
import Playground from '../../../assets/images/empreendimentos/kastell/playground.jpg';
import KastellLogo from '../../../assets/images/empreendimentos/kastell/kastell_logo.webp';

import PlantaGarden from '../../../assets/images/empreendimentos/kastell/plantagarden.jpg';
import PlantaNormal from '../../../assets/images/empreendimentos/kastell/ponta.jpg';
import PlantaPcd from '../../../assets/images/empreendimentos/kastell/plantapcd.jpg';
import PlantaPontaGarden from '../../../assets/images/empreendimentos/kastell/pontagarden.jpg';


import Contact from '../../organs/Contact';
import PlantasComponent, { PlantasType } from '../../organs/Plantas';

export function KastellPetropolis() {
    const HeroTexts = [
        {
            Heading: "Lançamento construtora Gênesis em Petrópolis",
            Paragraph: "",
            Button: "string",
            image: FachadaNoturna,
        },
        {
            Heading: "More a 10 minutos do centro histórico",
            Paragraph: "",
            Button: "string",
            image: Fachada,
        },
        {
            Heading: "Uma área de lazer incrível",
            Paragraph: "Com opções para você e sua família se divertirem o ano inteiro.",
            Button: "string",
            image: Piscina,
        },
        {
            Heading: "Manter a saúde em dia nunca foi tão fácil",
            Paragraph: "A academia do Kastell é completa e está sempre à sua disposição.",
            Button: "string",
            image: Academia,
        },
        {
            Heading: "Aproveite os dias de sol",
            Paragraph: "Com a quadra de esportes do Kastell, você e sua família podem se divertir sem sair de casa.",
            Button: "string",
            image: Playground,
        },

    ];
    
    const caracteristicasText: CaracteristicasTextTyte = {
        header: "Características do Kastell",
        list: [
            { title: "Piscina Adulto Com Raia" },
            { title: "Piscina Infantil" },
            { title: "Playground", },
            { title: "Sauna" },
            { title: "Academia" },
            { title: "Bicicletário" },
            { title: "Salão De Festas" }
        ]
    };

    const Plantas: PlantasType = {
        firstText: "Plantas",
        secondText: "UNIDADES COM VARANDA, 2 QUARTOS, SENDO UMA SUÍTE",
        plantas: [
            {
                image: PlantaGarden,
                description: "Planta Garden",
                items: [
                    { icon: "bed", text: "2 quartos" },
                    { icon: "shower", text: "2 banheiros" },
                    { icon: "house", text: "Varanda" }
                ]
            },
            {
                image: PlantaNormal,
                description: "Planta Ponta",
                items: [
                    { icon: "bed", text: "2 quartos" },
                    { icon: "shower", text: "2 banheiros" },
                    { icon: "house", text: "Varanda" }
                ]
            },
            {
                image: PlantaPcd,
                description: "Planta PCD",
                items: [
                    { icon: "bed", text: "2 quartos" },
                    { icon: "shower", text: "2 banheiros" },
                    { icon: "house", text: "Acessibilidade" }
                ]
            },
            {
                image: PlantaPontaGarden,
                description: "Planta Ponta Garden",
                items: [
                    { icon: "bed", text: "2 quartos" },
                    { icon: "shower", text: "2 banheiros" },
                    { icon: "house", text: "Varanda Garden" }
                ]
            }
        ]
    };
    
    const ContactTexts = {
        firstText: "Contato",
        phone: "(21) 9 7574-9247",
        paragraph: "Entre em contato conosco para saber mais sobre o Kastell.",
        button: "Faça uma simulação",
        whatsappMsg: "Olá, gostaria de fazer uma simulação para o Kastell."
    }
    return (
        <div className="min-h-screen">
            <HeroSlider HeroTexts={HeroTexts} empreendimento='Kastell'>
                <div className="w-screen bg-[#5C1113] p-5">
                    <div className="pl-16 md:pl-36">
                        <img src={KastellLogo} alt="Kastell logo" className='w-32 md:w-48' />
                    </div>
                </div>
            </HeroSlider>
            <Caracteristicas texts={caracteristicasText} className='bg-amber-900' />
            <PlantasComponent PlantasData={Plantas} />
            <Contact ContactTexts={ContactTexts} />
        </div>
    )
}