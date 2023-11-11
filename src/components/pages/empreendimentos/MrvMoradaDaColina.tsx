
import Caracteristicas, { CaracteristicasTextTyte } from '../../organs/Caracteristicas';
import HeroSlider from '../../organs/HeroSlider';
import Membership from '../../organs/Membership';
import Contact from '../../organs/Contact';

import Logo from '../../../assets/images/empreendimentos/mrvMoradaDaColina/morada-colina-logo.png';
import Fachada from '../../../assets/images/empreendimentos/mrvMoradaDaColina/guarita_diurna.webp';
import FachadaEntardecer from '../../../assets/images/empreendimentos/mrvMoradaDaColina/fachada_entardecer.webp';
import BicicletarioV03 from '../../../assets/images/empreendimentos/mrvMoradaDaColina/bicicletario_v03.webp';
import LazerExternoPetPlace from '../../../assets/images/empreendimentos/mrvMoradaDaColina/lazer_externo_pet_place.webp';
import InsercaoValeDoSolMoradaDa from '../../../assets/images/empreendimentos/mrvMoradaDaColina/insercao_vale_do_sol_morada_da.webp';

//galeria
import FotoInsercaoV02 from '../../../assets/images/empreendimentos/mrvMoradaDaColina/foto_insercao_v02.webp';
import SalaV02 from '../../../assets/images/empreendimentos/mrvMoradaDaColina/sala_v02.webp';
import GaleriaBanheiro from '../../../assets/images/empreendimentos/mrvMoradaDaColina/galeria_banheiro.webp';
import GaleriaCozinha from '../../../assets/images/empreendimentos/mrvMoradaDaColina/galeria_cozinha.webp';
import GaleriaQuartoCasal from '../../../assets/images/empreendimentos/mrvMoradaDaColina/galeria_quarto_casal.webp';
import GaleriaQuartoSolteiro from '../../../assets/images/empreendimentos/mrvMoradaDaColina/galeria_quarto_solteiro.webp';
import GaleriaGardem from '../../../assets/images/empreendimentos/mrvMoradaDaColina/galeria_gardem.webp';
import GaleriaPlantaPadrao from '../../../assets/images/empreendimentos/mrvMoradaDaColina/galeria_planta_padrao.webp';


import Galery from '../../organs/Galery';

export function MrvMoradaDaColina() {
    const HeroTexts = [
        {
            Heading: "Apartamentos na Região Jardim Alvorada",
            Paragraph: "",
            image: InsercaoValeDoSolMoradaDa,
        },
        {
            Heading: "Apartamentos de 2 quartos",
            Paragraph: "",
            image: Fachada,
        },
        {
            Heading: "Vista aérea",
            Paragraph: "localização do Residencial Morada Da Colina",
            image: FachadaEntardecer,
        },
        {
            Heading: "Bicicletário",
            Paragraph: "",
            image: BicicletarioV03,
        }
        ,
        {
            Heading: "Pet Place",
            Paragraph: "",
            image: LazerExternoPetPlace,
        }

    ];

    const GaleryTexts = {
        firstText: "Conheça o que o Residencial Morada Da Colina pode oferecer para você e sua família.",
        secondText: "Um lugar para chamar de lar",
        photos: [
            SalaV02,
            GaleriaBanheiro,
            GaleriaCozinha,
            GaleriaQuartoCasal,
            GaleriaQuartoSolteiro,
            GaleriaGardem,
            GaleriaPlantaPadrao,
            FotoInsercaoV02]
    };

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
                contactMsg: "Gostaria de saber mais sobre a casa de 2 quartos no Residencial Morada Da Colina."
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
        header: "Traga sua familia e conheça o Residencial Morada Da Colina",
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
        paragraph: "Entre em contato conosco para saber mais sobre o Residencial Morada Da Colina.",
        button: "Faça uma simulação",
        whatsappMsg: "Olá, gostaria de fazer uma simulação para o Residencial Morada Da Colina."
    }
    return (
        <div className="min-h-screen">
            <HeroSlider HeroTexts={HeroTexts} empreendimento='Residencial Morada Da Colina' >
                <div className="w-screen bg-gradient-to-r from-[#00D38D] to-[#006B3F] p-5">
                    <div className="pl-20 md:pl-40">
                        <img className='lg:max-h-28 md:max-h-24 max-h-20' src={Logo} alt="Logo" />
                    </div>
                </div>
            </HeroSlider>
            <Caracteristicas texts={caracteristicasCondominioText} className='bg-[#006B3F] ' />
            <Galery GaleryTexts={GaleryTexts} />
            <Caracteristicas texts={caracteristicasText} className='bg-[#006B3F] ' />
            {/* <PromotionalVideo PromotionalVideoTexts={PromotionalVideoTexts} /> */}

            <Membership MembershipPlans={ValuePlans} />
            <Contact ContactTexts={ContactTexts} />
        </div>
    )
}