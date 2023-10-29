import { Fade } from "react-awesome-reveal";
import CozinhaAmericana from "../../assets/images/empreendimentos/aurea-residencial/cozinhaamericana.jpg"
import FachadaNoturna from "../../assets/images/empreendimentos/aurea-residencial/fachada-noturna.jpg"
import Casas from "../../assets/images/empreendimentos/aurora2/casas.jpg"
import Casas2 from "../../assets/images/empreendimentos/aurora2/casas-2.jpg"
import CasasCondominio from "../../assets/images/empreendimentos/aurora2/casas-condominio.jpg"
import { Image } from "../atoms/Image";
import { Text } from "../atoms/Text";

const About = () => {
    const AboutTexts = {
        firstText: "Sobre a Rocha de Lima",
        secondText: "",
        caption: "Bem-vindo à Rocha de Lima Consultoria Imobiliária, onde transformamos o sonho da casa própria em realidade.",
        paragraph1: `

        Temos o orgulho de ser o seu parceiro de confiança no setor imobiliário, especializados na venda de empreendimentos das maiores construtoras, como a MRV e Direcional.
        
        Nossa missão é simples: fazer a aquisição de sua nova casa uma experiência descomplicada e gratificante. Entendemos que encontrar o lar perfeito é uma jornada única, e estamos aqui para orientá-lo em cada passo do caminho.
        
        Um dos nossos principais diferenciais é a nossa especialização em financiamentos através da Caixa Econômica Federal, tornando o processo de aquisição de imóveis mais acessível e viável para todos. Além disso, oferecemos orientação especializada sobre os programas habitacionais do governo, como o "Minha Casa, Minha Vida," o que pode resultar em subsídios significativos, dependendo da sua renda.
        
        Na Rocha de Lima Consultoria Imobiliária, valorizamos a transparência, a ética e a dedicação aos nossos clientes. `
    }

    return (
        <section className="w-full h-auto flex items-center bg-zinc-950">
            <main className="w-full md:h-[1000px] grid md:grid-cols-2 items-center lg:mx-20 md:mx-10 mx-6 gap-10 md:gap-10 py-12 md:py-0">
                <div className="h-full w-full md:order-1 order-2 flex flex-col justify-center items-start gap-4 pb-8 md:pb-12">
                    <Fade>
                        <div className="flex flex-col mt-10 items-start relative before:absolute before:-bottom-6 before:left-0 before:w-20 before:h-1 before:rounded-lg before:bg-gradient-to-r before:from-amber-500 before:to-red-500 z-10">
                            <Text as="h1" className="text-zinc-100 lg:text-5xl md:text-4xl text-3xl">{AboutTexts.firstText}</Text>
                        </div>
                        <Text as="h2" className="text-zinc-200 mt-10 mb-4 text-lg">{AboutTexts.caption}</Text>
                        <Text as="p" className="text-zinc-400 text-justify text-base">{AboutTexts.paragraph1}</Text>
                    </Fade>
                </div>
                <div className="w-full md:h-[700px] h-[500px] md:order-2 order-1 grid grid-cols-3 grid-rows-3">
                    <Image alt="Cozinha americana" objectCover="object-cover" className="col-span-3 row-span-2 w-full h-full" image={CozinhaAmericana} />
                    <Image alt="Fachada noturna" objectCover="object-cover" className="w-full h-full" image={FachadaNoturna} />
                    <Image alt="Chamada compras" objectCover="object-cover" className="w-full h-full border border-amber-500" image={Casas2} />
                    <Image alt="Casas" objectCover="object-cover" className="w-full h-full" image={CasasCondominio} />
                    <Image alt="Cozinha americana" objectCover="object-cover" className="col-span-3 row-span-2 w-full h-full" image={Casas} />
                </div>
            </main>

        </section>
    )
}

export default About