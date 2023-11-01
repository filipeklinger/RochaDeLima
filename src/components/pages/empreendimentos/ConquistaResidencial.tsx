
import Caracteristicas, { CaracteristicasTextTyte } from '../../organs/Caracteristicas';
import HeroSlider from '../../organs/HeroSlider';
import Membership from '../../organs/Membership';
import PromotionalVideo from '../../organs/PromotionalVideo';
import Contact from '../../organs/Contact';

import Logo from '../../../assets/images/empreendimentos/conquista-residencial/logo.png';
import Fachada from '../../../assets/images/empreendimentos/conquista-residencial/fachada.jpg';
import Guarita from '../../../assets/images/empreendimentos/conquista-residencial/guarita.jpg';
import Piscina from '../../../assets/images/empreendimentos/conquista-residencial/piscina.jpg';
import Academia from '../../../assets/images/empreendimentos/conquista-residencial/academia.jpg';
import QuadraEsportes from '../../../assets/images/empreendimentos/conquista-residencial/quadra-esportes.jpg';

export function ConquistaResidencial() {
    const HeroTexts = [
        {
            Heading: "Apartamentos de 1 e 2 quartos",
            Paragraph: "",
            image: Fachada,
        },
        {
            Heading: "Os espaços são iluminados e arejados",
            Paragraph: "Proporcionando muito mais conforto e bem-estar para você e sua família.",
            image: Guarita,
        },
        {
            Heading: "Uma área de lazer incrível",
            Paragraph: "Com opções para você e sua família se divertirem o ano inteiro.",
            image: Piscina,
        },
        {
            Heading: "Manter a saúde em dia nunca foi tão fácil",
            Paragraph: "A academia do Conquista Parque Iguaçu é completa e está sempre à sua disposição.",
            image: Academia,
        },
        {
            Heading: "Aproveite os dias de sol",
            Paragraph: "Com a quadra de esportes do Conquista Parque Iguaçu, você e sua família podem se divertir sem sair de casa.",
            image: QuadraEsportes,
        },

    ];
    const MembershipPlans = {
        firstText: "Disponibilidade",
        secondText: "Escolha o melhor para você",
        cards: [
            {
                amount: 197,
                unity: "mil",
                caption: "1 quarto a partir de",
                benefits: [
                    "Condomínio com lazer completo",
                    "Entrada a partir de R$ 999",
                    "Entregue com Piso",
                    "1 quarto",
                    "vaga de garagem",
                    "piscina",
                    "playground",
                    "salão de festas",
                    "quadra poliesportiva",
                    "academia",

                ],
                contactMsg: "Gostaria de saber mais sobre os apartamentos de 1 quarto no Conquista Parque Iguaçu."
            },
            {
                amount: 0,
                unity: "",
                caption: "2 quartos",
                benefits: [
                    "Condomínio com lazer completo",
                    "Entregue com Piso",
                    "2 quartos",
                    "vaga de garagem",
                    "piscina",
                    "playground",
                    "salão de festas",
                    "quadra poliesportiva",
                    "academia",
                ],
                contactMsg: "Gostaria de saber mais sobre os apartamentos de 2 quartos no Conquista Parque Iguaçu."
            },
        ]
    }
    const TourVideoTexts = {
        firstText: "Tour Virtual",
        paragraph: "Para navegar pelo empreendimento, clique nos pontos brancos e arraste o mouse para onde deseja ir",
        videoUrl: "https://my.matterport.com/show/?m=GiiNMRevSoF"
    }
    const caracteristicasText: CaracteristicasTextTyte = {
        header: "Diferenciais do Condomínio",
        list: [
            {
                title: "Localização Privilegiada",
                description: "More em uma localização privilegiada, com comodidades e diversas opções de comércio, transporte e lazer.",
            },
            {
                title: "Lazer completo",
                description: "Opções de lazer para toda a família, desde espaços para praticar atividades físicas até áreas exclusivas para garantir a diversão das crianças.",
            },
            {
                title: "Portaria 24h",
                description: "Portaria 24 horas para você ter liberdade de acesso ou saída do condomínio com segurança."
            },
            {
                title: "Estacionamento para Bicicletas",
                description: "Gosta de andar de bike? Tenha um espaço exclusivo para guardar sua bicicleta com total segurança."
            },
            {
                title: "Condomínio Fechado",
                description: "Condomínio de acesso privativo, garantindo mais privacidade e segurança para sua família. "
            },
            {
                title: "Espaço Fitness",
                description: "Leve uma vida mais saudável praticando atividades físicas no Espaço Fitness, que já vem equipado para você dar esse grande passo de cuidados com a sua saúde.",
            },
            {
                title: "Espaço Verde e Contato com a Natureza",
                description: "Temos áreas verdes que, além de proporcionarem contato com a natureza, ajudam no bem-estar e preservação do meio-ambiente. ",
            },
            {
                title: "Utilize seu FGTS",
                description: "Se você possui 3 anos com carteira assinada, pode usar o saldo do FGTS para comprar o imóvel. ",
            },
            { title: "Condições de Pagamento Facilitadas", }
        ]
    };
    const PromotionalVideoTexts = {
        firstText: "Conheça o Conquista Parque Iguaçu",
        paragraph: "",
        videoUrl: "https://www.youtube.com/embed/PQOA5AS0Sdo?si=2sVF_pUFhgRFQpli&amp;start=28"
    }
    const caracteristicasCondominioText: CaracteristicasTextTyte = {
        header: "Condomínio Inteligente e Sustentável",
        list: [
            { title: "Torneiras com arejadores nos apartamentos (redução do consumo)" },
            { title: "Lâmpadas de LED nas áreas comuns" },
            { title: "Previsão de medição individualizada de água e gás" },
            { title: "Bacia sanitária com caixa acoplada/duplo acionamento" },
            { title: "Sensor de Presença nos halls e circulações das torres" },
            { title: "Abrigo para coleta de lixo reciclável" },
        ]
    };
    const ContactTexts = {
        firstText: "Contato",
        phone: "(21) 9 7574-9247",
        paragraph: "Entre em contato conosco para saber mais sobre o Conquista Parque Iguaçu.",
        button: "Faça uma simulação",
        whatsappMsg: "Olá, gostaria de fazer uma simulação para o Conquista Parque Iguaçu."
    }
    return (
        <div className="min-h-screen">
            <HeroSlider HeroTexts={HeroTexts} empreendimento='Conquista Parque Iguaçu' >
                <div className="w-screen bg-[#0160BA] p-5">
                    <div className="pl-20 md:pl-40">
                        <img className='lg:max-h-28 md:max-h-24 max-h-20' src={Logo} alt="Conquista logo" />
                    </div>
                </div>
            </HeroSlider>
            <PromotionalVideo PromotionalVideoTexts={TourVideoTexts} />
            <Caracteristicas texts={caracteristicasText} className='bg-[#0160BA]' />
            <PromotionalVideo PromotionalVideoTexts={PromotionalVideoTexts} />
            <Caracteristicas texts={caracteristicasCondominioText} className='bg-[#0160BA]' />
            <Membership MembershipPlans={MembershipPlans} />
            <Contact ContactTexts={ContactTexts} />
        </div>
    )
}