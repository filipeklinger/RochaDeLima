import { Link } from "react-router-dom"
import { Text } from "../atoms/Text"
import { House, MapPin, Phone } from "@phosphor-icons/react"
import { List } from "../atoms/List"
import { openWhatsapp } from "../../utils/contactUtils"
import { NavLinks, SocialMediaLinks } from "../particles/Data"
import { Buildings } from "@phosphor-icons/react"


const Footer = () => {

    const FooterTexts = {
        underLogoText: "",
        quickLinks: {
            caption: "Empreendimentos",
            links: [...NavLinks]
        },
        contacts: {
            caption: "Contatos",
            names: [
                {
                    name: "Nova Iguaçu, Rio de Janeiro, Brasil",
                },
                {
                    name: "",
                },
                {
                    name: "",
                }
            ]
        },
        copyright: `Rocha de Lima Consultoria imobiliária Copyright ${new Date().getUTCFullYear()}. All Right Reserved`
    }

    return (
        <footer className="w-full bg-zinc-950 flex flex-col">
            <main className="w-full lg:pt-28 lg:pb-12 pt-20 pb-12 px-6 grid md:grid-cols-3 lg:gap-8 md:gap-5 gap-8 lg:px-32">
                <div className="flex flex-col gap-2">
                    <Link to={`/`} className="font-extrabold flex items-center relative md:text-3xl text-2xl">

                        <Text as="span" className="text-white">Rocha de lima</Text>
                    </Link>
                    <Text as="p" className="text-zinc-400 text-justify">
                        Rocha de lima é uma consultoria imobiliária que atua no mercado de imóveis novos e/ou na planta, com o objetivo de oferecer aos seus clientes um serviço de qualidade e confiança.
                    </Text>
                </div>

                {/* Quick Links  */}
                <div className="flex flex-col md:items-center md:mt-8 gap-4">
                    <Text as="h1" className="text-zinc-300 text-2xl font-bold">{FooterTexts.quickLinks.caption}</Text>
                    <ul className="flex flex-col gap-2">
                        {
                            FooterTexts.quickLinks.links.map((link, index) => (
                                <List className="text-zinc-400 flex items-start gap-2" key={index}>
                                    <Text as="span" className="text-amber-500 mt-1">
                                        {
                                            link.type === "Building" ?
                                                <Buildings size={20} color="currentColor" /> :
                                                <House size={20} color="currentColor" />
                                        }
                                    </Text>
                                    <Link to={link.url} className="transition-all duration-200 hover:text-red-500">{link.name}</Link>
                                </List>
                            ))
                        }
                    </ul>
                </div>

                {/* Quick contacts  */}
                <div className="flex flex-col md:mt-8 gap-6">
                    <Text as="h1" className="text-zinc-300 text-2xl font-bold">{FooterTexts.contacts.caption}</Text>
                    <ul className="flex flex-col gap-4">
                        <List className="text-zinc-400 flex items-start gap-2" >
                            <Text as="span" className="text-amber-500 mt-1"><MapPin size={20} color="currentColor" /></Text>
                            <Text as="span" className="">Nova Iguaçu, Rio de Janeiro, Brasil</Text>
                        </List>
                        <List className="text-zinc-400 flex items-start gap-2" >
                            <div className="flex items-start gap-2 cursor-pointer" onClick={() => openWhatsapp("Gostaria de conhecer os empreendimentos disponíveis.")}>
                                <Text as="span" className="text-amber-500 mt-1"><Phone size={20} color="currentColor" /></Text>
                                <Text as="span" className="">(21) 9 7574-9247</Text>
                            </div>
                        </List>
                        {SocialMediaLinks.map((link, index) => (
                            <List className="text-zinc-400 flex items-start content-center gap-2" key={index}>
                                <Text as="span" className="text-amber-500 mt-1">{link.icon}</Text>
                                <a href={link.url} className="transition-all duration-200 hover:text-red-500">
                                    {link.name}
                                </a>
                            </List>

                        ))}
                    </ul>
                </div>
            </main>
            <div className="text-center py-3 bg-gradient-to-r from-red-500 to-amber-500">
                <Text as="p" className="text-zinc-200 md:text-sm text-xs font-bold">{FooterTexts.copyright}</Text>
            </div>
        </footer>
    )
}

export default Footer