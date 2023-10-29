import { Text } from "../atoms/Text"

const Caracteristicas = () => {

    const caracteristicas = [
        "Piscina Adulto Com Raia",
        "Piscina Infantil",
        "Playground",
        "Quadra De Esportes Infantil",
        "2 Churrasqueiras",
        "Academia",
        "Bicicletário",
        "Salão De Festas"
    ];

    return (
        <section className="w-full h-auto flex items-center bg-amber-900">
            <main className="w-full lg:h-[400px] md:h-[300px] flex flex-col justify-center items-center gap-10 md:gap-10 py-12 md:py-0">

                <div className="flex flex-col  items-center relative before:absolute before:-bottom-6 before:left-30 before:w-20 before:h-1 before:rounded-lg before:bg-gradient-to-r before:from-amber-500 before:to-red-500 z-10">
                    <Text as="h1" className="text-zinc-100 lg:text-5xl md:text-4xl text-3xl text-center">Caracteristicas do Empreendimento</Text>
                </div>
                <div className="flex flex-col justify-center">
                    <ul className="w-full lg:px-8 md:px-2 h-auto mt-4 list-disc list-inside">
                        {caracteristicas.map((caracteristica, index) => (
                            <li key={index}>{caracteristica}</li>
                        ))}
                    </ul>
                </div>



            </main>

        </section>
    )
}

export default Caracteristicas