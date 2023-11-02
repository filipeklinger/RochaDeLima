import { Text } from "../atoms/Text";

export function PoliticaDePrivacidade() {
    return (
        <section className="w-full min-h-screen md:min-h-[1000px] relative p-10 lg:pt-28 md:pt-24 pt-20">
            <div className="flex flex-col justify-center items-center">
                <Text as="h1" className="text-zinc-100 lg:text-5xl md:text-4xl text-3xl text-center">Política de Privacidade</Text>
                <Text as="p" className="text-justify pb-10 pt-10">
                    Última atualização: 01/11/2023
                    <br />
                    <br />
                    A <b>Rocha de lima consultoria</b> ("nós", "nosso" ou "nossa") está comprometida em proteger a privacidade das informações pessoais dos usuários do nosso site de consultoria imobiliária. Esta Política de Privacidade descreve como coletamos, usamos, divulgamos e protegemos suas informações pessoais quando você utiliza nosso site. Ao acessar ou utilizar nosso site, você concorda com os termos desta Política de Privacidade.
                </Text>

                <ol style={{ listStyle: 'auto' }} className="pl-10 text-2xl text-justify" type="1">
                    <li>Informações coletadas
                        <ol style={{ listStyle: 'lower-latin' }} className="pl-10 text-base">
                            <li>Informações de contato, como nome, endereço de e-mail, número de telefone e endereço postal.</li>
                            <li>Informações de registro, como nome de usuário e senha.</li>
                            <li>Informações relacionadas à propriedade que você procura ou deseja vender, como localização, tipo de imóvel, faixa de preço, número de quartos, etc.</li>
                            <li>Informações de navegação, incluindo endereço IP, dados de uso, histórico de navegação e preferências do usuário.</li>
                            <li>Informações de contato adicionais fornecidas durante a comunicação com nossa equipe de suporte ou equipe de vendas.</li>
                        </ol>
                    </li>
                    <li>Uso das informações
                        <ol style={{ listStyle: 'lower-latin' }} className="pl-10 text-base">
                            <li>Fornecer informações e serviços relacionados à consultoria imobiliária, como apresentar propriedades, auxiliar na compra ou venda de imóveis e fornecer informações relevantes.</li>
                            <li>Personalizar sua experiência no site, adaptando o conteúdo com base em suas preferências e interesses.</li>
                            <li>Melhorar nosso site, produtos e serviços com base nas informações de uso e feedback dos usuários.</li>
                            <li>Entrar em contato com você para responder a perguntas, fornecer suporte ou enviar informações relevantes sobre nossos serviços.</li>
                            <li>Cumprir com obrigações legais ou regulatórias.</li>
                        </ol>
                    </li>
                    <li>Compartilhamento de informações
                        <p className="text-base">Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros sem o seu consentimento, a menos que seja necessário para prestar os serviços solicitados por você ou cumprir com obrigações legais.</p>
                        <p className="text-base">Podemos compartilhar suas informações com:</p>
                        <ol style={{ listStyle: 'lower-latin' }} className="pl-10 text-base">
                            <li>Parceiros de negócios que nos auxiliam na prestação de serviços, como empresas de tecnologia ou parceiros imobiliários.</li>
                            <li>Autoridades governamentais, quando exigido por lei.</li>
                        </ol>
                    </li>
                    <li>Proteção das informações
                        <p className="text-base">Implementamos medidas de segurança para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição. No entanto, lembre-se de que nenhum sistema é completamente seguro, e você deve tomar medidas para proteger suas informações pessoais, como manter suas credenciais de login em sigilo.</p>
                    </li>
                    <li>Cookies e tecnologias similares
                        <p className="text-base">Nosso site pode usar cookies e tecnologias similares para coletar informações sobre como você utiliza o site. Você pode gerenciar suas preferências de cookies por meio das configurações do seu navegador.</p>
                    </li>
                    <li>Links para sites de terceiros
                        <p className="text-base">Nosso site pode conter links para sites de terceiros. Esta Política de Privacidade não se aplica a esses sites, e recomendamos que você revise as políticas de privacidade deles ao acessá-los.</p>
                    </li>
                    <li>Seus direitos
                        <p className="text-base">Você tem o direito de acessar, corrigir ou excluir suas informações pessoais a qualquer momento. Entre em contato conosco através das informações fornecidas abaixo para exercer esses direitos.</p>
                    </li>
                    <li>Contato
                        <p className="text-base">Se você tiver alguma dúvida, preocupação ou solicitação relacionada à nossa Política de Privacidade, entre em contato conosco:</p>
                        <ul className="text-base">
                            <li><a className="underline hover:text-cyan-500	" href="mailto:ingridrochacomercial@gmail.com">ingridrochacomercial@gmail.com</a></li>
                            <li>(21) 9 7574-9247</li>
                        </ul>
                        <p className="pt-14 text-xl">Esta Política de Privacidade pode ser atualizada periodicamente. Verifique a data de atualização no início desta política para saber quando foi a última revisão. O uso contínuo do nosso site após a publicação de alterações na política significará que você concorda com as alterações.</p>
                    </li>
                </ol>
            </div>
        </section>
    )
}