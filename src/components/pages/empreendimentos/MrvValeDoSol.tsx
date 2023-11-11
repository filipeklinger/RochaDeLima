
import Caracteristicas, { CaracteristicasTextTyte } from '../../organs/Caracteristicas';
import HeroSlider, { HeroText } from '../../organs/HeroSlider';
import Membership from '../../organs/Membership';
import Contact from '../../organs/Contact';
import Galery from '../../organs/Galery';
// import PromotionalVideo from '../../organs/PromotionalVideo';

//images
import Logo from '../../../assets/images/empreendimentos/mrvValeDoSol/logo.png';
import Fachada from '../../../assets/images/empreendimentos/mrvValeDoSol/fachada.png';
import VistaAerea from '../../../assets/images/empreendimentos/mrvValeDoSol/vista_aerea.png';
import Bicicletario from '../../../assets/images/empreendimentos/mrvValeDoSol/bicicletario.png';
import Pomar from '../../../assets/images/empreendimentos/mrvValeDoSol/pomar.png';
import Quadra from '../../../assets/images/empreendimentos/mrvValeDoSol/quadra.png';
import SalaoFestas from '../../../assets/images/empreendimentos/mrvValeDoSol/salao_festas.png';
import Piscina from '../../../assets/images/empreendimentos/mrvValeDoSol/piscina.png';
import Piscina2 from '../../../assets/images/empreendimentos/mrvValeDoSol/piscina2.png';


//galeria
import GaleriaSala from '../../../assets/images/empreendimentos/mrvValeDoSol/galeria_sala.png';
// import GaleriaCozinha from '../../../assets/images/empreendimentos/mrvValeDoSol/galeria_cozinha.png';
import GaleriaQuartoCasal from '../../../assets/images/empreendimentos/mrvValeDoSol/galeria_quarto_casal.png';
import GaleriaQuartoSolteiro from '../../../assets/images/empreendimentos/mrvValeDoSol/galeria_quarto_solteiro.png';
import GaleriaGardem from '../../../assets/images/empreendimentos/mrvValeDoSol/galeria_gardem.png';
import PlantaGardem from '../../../assets/images/empreendimentos/mrvValeDoSol/planta_gardem.png';
import PlantaGardemDuplo from '../../../assets/images/empreendimentos/mrvValeDoSol/planta_gardem_duplo.png';

export function MrvValeDoSol() {
    const HeroTexts:HeroText[] = [
        {
            Heading: "Lazer completo",
            Paragraph: "",
            image: Piscina2,
        },
        {
            Heading: "Apartamentos de 2 quartos",
            Paragraph: "",
            image: Fachada,
        },
        {
            Heading: "Apartamentos na Região Jardim Alvorada",
            Paragraph: "",
            image: VistaAerea,
        },
        {
            Heading: "Bicicletário",
            Paragraph: "",
            image: Bicicletario,
        },
        {
            Heading: "Pomar / Pet Place",
            Paragraph: "",
            image: Pomar,
        },
        {
            Heading: "Quadra poliesportiva",
            Paragraph: "",
            image: Quadra,
        },
        {
            Heading: "Realize suas festas",
            Paragraph: "",
            image: SalaoFestas,
        }
    ];

    const GaleryTexts = {
        firstText: "Conheça o que o Residencial Vale Do Sol pode oferecer para você e sua família.",
        secondText: "Um lugar para chamar de lar",
        photos: [
            Piscina,
            GaleriaSala,
            // GaleriaCozinha,
            GaleriaQuartoCasal,
            GaleriaQuartoSolteiro,
            GaleriaGardem,
            PlantaGardem,
            PlantaGardemDuplo
            ]
    };

    // const PromotionalVideoTexts = {
    //     firstText: "Conheça o Residencial Vale Do Sol",
    //     secondText: "sua casa própria está aqui",
    //     videoUrl: "https://www.youtube.com/embed/SLhWCcikjWY?si=8LpQO11t0tdFnqS_"
    // };

    const ValuePlans = {
        firstText: "Disponibilidade",
        secondText: "Escolha o melhor para você",
        cards: [
            {
                caption: "2 quartos a partir de",
                amount: 206,
                unity: "mil",
                benefits: [
                    "2 quartos",
                    "vaga de garagem",
                    'Bicicletário',
                    "Cerâmica Cozinha e Banheiro",
                    "Bancadas em mármore sintético",
                    "Dispositivos Economizadores de Água",
                    "Dispositivos Economizadores de Energia",
                    "Previsão para medição de água individualizada",
                    "Tanque em mármore sintético",
                    "Revestimento das áreas molhadas",
                    "Forro de gesso no banheiro"
                ],
                contactMsg: "Gostaria de saber mais sobre o apartamento de 2 quartos no Residencial Vale Do Sol."
            },
        ]
    }

    const caracteristicasText: CaracteristicasTextTyte = {
        header: "Diferenciais do Condomínio",
        list: [
            {
                title: 'Bicicletário',
                description: 'Incentivando mais uma vez o bem estar e a sustentabilidade, a MRV cria espaços exclusivos para o estacionamento de bicicletas dentro dos condomínios. As vagas no bicicletário são limitadas.'
            },
            {
                title: 'Cerâmica Cozinha e Banheiro',
                description: 'O piso de cerâmica é o mais funcional do mercado, é bonito, não mancha, e ainda muito fácil de limpar. Deixando sua vida mais prática.'
            },
            {
                title: 'Bancadas em mármore sintético',
                description: 'As bancadas em mármore sintético são mais resistentes e fáceis de limpar. Além disso, são mais bonitas e dão um toque de sofisticação ao ambiente.'
            },
            {
                title: 'Dispositivos Economizadores de Água',
                description: 'Com o objetivo de ajudar os condomínios a economizar água, serão instalados arejadores e redutores de vazão nas torneiras das áreas comuns dos empreendimentos. Nas louças sanitárias será acoplada a caixa economizadora de água, com opção de fluxo de 3/6 litros.'
            },
            {
                title: 'Dispositivos Economizadores de Energia',
                description: 'Para a redução do consumo de energia nos condominios, serão utilizadas nas áreas comuns lâmpadas de led mais eficientes e sensores de presença nos halls dos blocos/torres. Além de ser sustentável, possibilita um menor custo para os moradores.'
            },
            {
                title: 'Previsão para medição de água individualizada',
                description: 'O seu consumo controlado por quem deve: você. Preparação para medição individualizada de água por apartamento.'
            },
            {
                title: 'Tanque em mármore sintético',
                description: 'Maior resistência à corrosão e a impactos, melhor acabamento com design mais moderno, além de maior durabilidade suportando bem a umidade.'
            },
            {
                title: 'Revestimento das áreas molhadas',
                description: 'Revestimento cerâmico em meia parede nas áreas molhadas, aliando beleza e funcionalidade, além de ser mais resistente ao tempo e à umidade.'
            },
            {
                title: 'Forro de gesso no banheiro',
                description: 'A versatilidade do gesso propicia um acabamento interior elegante, maior resistência e um ótimo isolamento termo-acústico para seu banheiro.'
            }
        ]
    };

    const caracteristicasCondominioText: CaracteristicasTextTyte = {
        header: "Traga sua familia e conheça o Residencial Vale Do Sol",
        list: [

            {
                title: "Salão de Festas",
                description: "Comemore datas especiais sem sair de casa."
            },
            {
                title: "Playground",
                description: "Diversão garantida para as crianças."
            },
            {
                title: "Pet Place",
                description: "Um espaço para seu pet se divertir."
            },
            {
                title: "Espaço Gourmet",
                description: "Um espaço para você reunir os amigos e familiares."
            }
        ]
    };
    const ContactTexts = {
        firstText: "Contato",
        phone: "(21) 9 7574-9247",
        paragraph: "Entre em contato conosco para saber mais sobre o Residencial Vale Do Sol.",
        button: "Faça uma simulação",
        whatsappMsg: "Olá, gostaria de fazer uma simulação para o Residencial Vale Do Sol."
    }
    return (
        <div className="min-h-screen">
            <HeroSlider HeroTexts={HeroTexts} empreendimento='Residencial Vale Do Sol' >
                <div className="w-screen bg-gradient-to-r from-[#5EB77A] to-[#97C562] p-5">
                    <div className="pl-20 md:pl-40">
                        <img className='lg:max-h-28 md:max-h-24 max-h-20' src={Logo} alt="Logo" />
                    </div>
                </div>
            </HeroSlider>
            <Caracteristicas texts={caracteristicasCondominioText} className='bg-gradient-to-r from-[#5EB77A] to-[#97C562]' />
            <Galery GaleryTexts={GaleryTexts} />
            <Caracteristicas texts={caracteristicasText} className='bg-gradient-to-r from-[#5EB77A] to-[#97C562]' />
            {/* <PromotionalVideo PromotionalVideoTexts={PromotionalVideoTexts} /> */}

            <Membership MembershipPlans={ValuePlans} />
            <Contact ContactTexts={ContactTexts} />
        </div>
    )
}