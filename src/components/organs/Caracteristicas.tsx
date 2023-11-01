import { CheckCircle } from "@phosphor-icons/react"
import { Text } from "../atoms/Text"
export type CaracteristicasTextTyte = {
    header: string,
    list: {
        title: string,
        description?: string
    }[]
}
const Caracteristicas = ({ texts, className }: { texts: CaracteristicasTextTyte, className: string }) => {

    return (
        <section className={`w-full h-auto flex items-center pt-10 pb-10 ` + className}>
            <main className="w-full lg:min-h-[300px] md:min-h-[200px] flex flex-col justify-center items-center gap-10 md:gap-10 py-12 md:py-0">

                <div className="flex flex-col  items-center relative before:absolute before:-bottom-6 before:left-30 before:w-20 before:h-1 before:rounded-lg before:bg-gradient-to-r before:from-amber-500 before:to-red-500 z-10">
                    <Text as="h1" className="text-zinc-100 lg:text-5xl md:text-4xl text-3xl text-center">{texts.header}</Text>
                </div>
                <div className="flex flex-col justify-center pl-1 pr-1">
                    {
                        texts.list.map((c, index) => (
                            <div className="flex justfy-between min-w-[50px]" key={index}>
                                <div className="mr-5 pb-1"><CheckCircle size={30} /></div>
                                <div className="flex flex-col justify-center">
                                    <div className={c.description ? `text-xl` : ``}>{c.title}</div>
                                    {c.description && <div className="mb-10">{c.description}</div>}
                                </div>
                            </div>
                        ))
                    }

                </div>



            </main>

        </section>
    )
}

export default Caracteristicas