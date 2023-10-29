
import Caracteristicas from '../../organs/Caracteristicas';
import HeroSlider from '../../organs/HeroSlider';

import Fachada from '../../../assets/images/empreendimentos/aurea-residencial/fachada.jpg';
import FachadaNoturna from '../../../assets/images/empreendimentos/aurea-residencial/fachada-noturna.jpg';
import Piscina from '../../../assets/images/empreendimentos/aurea-residencial/piscina.jpg';
import Academia from '../../../assets/images/empreendimentos/aurea-residencial/academia.jpg';
import QuadraEsportes from '../../../assets/images/empreendimentos/aurea-residencial/quadra-esportes-infantil.jpg';
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
    return(
        <div className="min-h-screen">
            <HeroSlider HeroTexts={HeroTexts} />
            <Caracteristicas />
        </div>
    )
}