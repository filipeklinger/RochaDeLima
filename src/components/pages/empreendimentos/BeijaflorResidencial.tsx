
import Caracteristicas, { CaracteristicasTextTyte } from '../../organs/Caracteristicas';
import HeroSlider from '../../organs/HeroSlider';
import Membership from '../../organs/Membership';
// import PromotionalVideo from '../../organs/PromotionalVideo';
import Contact from '../../organs/Contact';

import Logo from '../../../assets/images/empreendimentos/beijaflor-residencial/logotipo-beija-flor.png';
import Fachada from '../../../assets/images/empreendimentos/beijaflor-residencial/fachada.jpg';
import VisitaFachada from '../../../assets/hero/res-beijaflor.jpeg';
import Academia from '../../../assets/images/empreendimentos/beijaflor-residencial/diferenciais-academia-1.jpg';
import AreaPet from '../../../assets/images/empreendimentos/beijaflor-residencial/diferenciais-area-pet.jpg';
import GourmetSalao from '../../../assets/images/empreendimentos/beijaflor-residencial/diferenciais-gourmet-salao.jpg';
import Gourmet from '../../../assets/images/empreendimentos/beijaflor-residencial/diferenciais-gourmet.jpg';
import Piscina from '../../../assets/images/empreendimentos/beijaflor-residencial/diferenciais-piscina-1.jpg';
import Playground from '../../../assets/images/empreendimentos/beijaflor-residencial/diferenciais-playground.jpg';
import Quadra from '../../../assets/images/empreendimentos/beijaflor-residencial/diferenciais-quadra-1.jpg';

import Galeria1 from '../../../assets/images/empreendimentos/beijaflor-residencial/galeria-01.jpg';
import Galeria2 from '../../../assets/images/empreendimentos/beijaflor-residencial/galeria-02.jpg';
import Galeria3 from '../../../assets/images/empreendimentos/beijaflor-residencial/galeria-03.jpg';
import Galeria4 from '../../../assets/images/empreendimentos/beijaflor-residencial/galeria-04.jpg';
import Galeria5 from '../../../assets/images/empreendimentos/beijaflor-residencial/galeria-05.jpg';
import Galeria6 from '../../../assets/images/empreendimentos/beijaflor-residencial/galeria-06.jpg';
import Galeria7 from '../../../assets/images/empreendimentos/beijaflor-residencial/galeria-07.jpg';
import Galeria8 from '../../../assets/images/empreendimentos/beijaflor-residencial/galeria-08.jpg';
import Galeria9 from '../../../assets/images/empreendimentos/beijaflor-residencial/galeria-09.jpg';
import Galeria10 from '../../../assets/images/empreendimentos/beijaflor-residencial/galeria-10.jpg';
import Galeria11 from '../../../assets/images/empreendimentos/beijaflor-residencial/galeria-11.jpg';
import Galeria12 from '../../../assets/images/empreendimentos/beijaflor-residencial/galeria-12.jpg';
import Galeria13 from '../../../assets/images/empreendimentos/beijaflor-residencial/galeria-13.jpg';

import Galery from '../../organs/Galery';

export function BeijaFlorResidencial() {
    const HeroTexts = [
        {
            Heading: "Casas de 2 quartos",
            Paragraph: "O MAIS MODERNO CONDOMÍNIO DE CASAS DA BAIXADA FLUMINENSE!",
            image: Fachada,
        },
        {
            Heading: "Sua casa própria",
            Paragraph: "Venha morar em um condomínio de casas com lazer completo e segurança 24h.",
            image: VisitaFachada,
        },
        {
            Heading: "Academia interna",
            Paragraph: "Mantenha a saúde em dia sem sair de casa.",
            image: Academia,
        },
        {
            Heading: "Área Pet",
            Paragraph: "Seu pet vai amar morar aqui!",
            image: AreaPet,
        },
        {
            Heading: "Salão Gourmet",
            Paragraph: "Receba seus amigos e familiares com muito conforto e comodidade.",
            image: GourmetSalao,
        },
        {
            Heading: "Salão de festas",
            Paragraph: "Comemore datas especiais sem sair de casa.",
            image: Gourmet,
        },
        {
            Heading: "Piscina",
            Paragraph: "Aproveite os dias de sol com a família.",
            image: Piscina,
        },
        {
            Heading: "Playground",
            Paragraph: "Diversão garantida para as crianças.",
            image: Playground,
        },
        {
            Heading: "Quadra poliesportiva",
            Paragraph: "A nossa quadra adaptável possibilita a prática de diversos esportes e é ideal para os jovens que gostam de se reunir para jogar.",
            image: Quadra,
        },

    ];

    const GaleryTexts = {
        firstText: "Conheça o que o Beija-flor Residencial pode oferecer para você e sua família.",
        secondText: "Uma casa para chamar de sua",
        photos: [
            Galeria1, Galeria2, Galeria3, Galeria4, Galeria5, Galeria6, Galeria7, Galeria8, Galeria9, Galeria10, Galeria11, Galeria12, Galeria13
        ]
    };

    const ValuePlans = {
        firstText: "Disponibilidade",
        secondText: "Escolha o melhor para você",
        cards: [
            {
                caption: "2 quartos a partir de",
                amount: 265,
                unity: "mil",
                benefits: [
                    "2 quartos",
                    "vaga de garagem",
                    "Lazer completo",
                    "Piscina",
                    "Playground",
                    "Salão de festas",
                    "Quadra poliesportiva",
                    "Academia Interna",
                ],
                contactMsg: "Gostaria de saber mais sobre a casa de 2 quartos no Beija-flor Residencial."
            },
        ]
    }

    const caracteristicasText: CaracteristicasTextTyte = {
        header: "Diferenciais do Condomínio",
        list: [
            {
                title: "Lazer completo",
                description: "Opções de lazer para toda a família, desde espaços para praticar atividades físicas até áreas exclusivas para garantir a diversão das crianças.",
            },
            {
                title: "Condomínio Fechado",
                description: "Condomínio de acesso privativo, com câmeras de segurança pré-instaladas, garantindo mais privacidade e segurança para sua família. "
            },
            {
                title: "Academia Interna",
                description: "Mantenha a saúde em dia sem sair de casa."
            },
            {
                title: "Área Pet",
                description: "Seu pet vai amar morar aqui!"
            },
            {
                title: "Salão Gourmet",
                description: "Receba seus amigos e familiares com muito conforto e comodidade."
            },
            {
                title: "Salão de festas",
                description: "Comemore datas especiais sem sair de casa."
            },
            {
                title: "Piscina",
                description: "Aproveite os dias de sol com a família."
            },
            {
                title: "Playground",
                description: "Diversão garantida para as crianças."
            },
            {
                title: "Quadra poliesportiva",
                description: "A nossa quadra adaptável possibilita a prática de diversos esportes e é ideal para os jovens que gostam de se reunir para jogar."
            },
            {
                title: "Portaria 24h",
                description: "Portaria com segurança 24h para garantir a tranquilidade dos moradores."
            },
            {
                title: "Câmeras de segurança",
                description: "Câmeras de segurança pré-instaladas, garantindo mais privacidade e segurança para sua família."
            }
        ]
    };
    
    const caracteristicasCondominioText: CaracteristicasTextTyte = {
        header: "Traga sua familia e conheça o Beija-flor Residencial",
        list: [
            { title: "Próximo a escolas e UPA" },
            { title: "A 5 minutos da estação de trem" },
            {title: "Ao lado da policlinica AQUINO RAMOS" },
            {title: "Local de facil locomoção" },
        ]
    };
    const ContactTexts = {
        firstText: "Contato",
        phone: "(21) 9 7574-9247",
        paragraph: "Entre em contato conosco para saber mais sobre o Beija-flor Residencial.",
        button: "Faça uma simulação",
        whatsappMsg: "Olá, gostaria de fazer uma simulação para o Beija-flor Residencial."
    }
    return (
        <div className="min-h-screen">
            <HeroSlider HeroTexts={HeroTexts} empreendimento='Beija-flor Residencial' >
                <div className="w-screen bg-gradient-to-r from-[#2EBCDB] to-[#934B9D] p-5">
                    <div className="pl-20 md:pl-40">
                        <img className='lg:max-h-28 md:max-h-24 max-h-20' src={Logo} alt="Logo" />
                    </div>
                </div>
            </HeroSlider>
            <Caracteristicas texts={caracteristicasCondominioText} className='bg-gradient-to-r from-[#2EBCDB] to-[#934B9D] ' />
            <Galery GaleryTexts={GaleryTexts} />
            <Caracteristicas texts={caracteristicasText} className='bg-gradient-to-r from-[#2EBCDB] to-[#934B9D] ' />
            {/* <PromotionalVideo PromotionalVideoTexts={PromotionalVideoTexts} /> */}
            
            <Membership MembershipPlans={ValuePlans} />
            <Contact ContactTexts={ContactTexts} />
        </div>
    )
}