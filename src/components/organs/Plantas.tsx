import { useState, useCallback } from "react"
import { Text } from "../atoms/Text"
import { Card } from "../molecules/Card"
import { Image } from "../atoms/Image"
import { List } from "../atoms/List";
import { Bed, Shower, House } from "@phosphor-icons/react";

export type PlantasType = {
    firstText: string;
    secondText: string;
    plantas: {
        image: string;
        description: string;
        items: {
            icon: string;
            text: string;
        }[];
    }[];
}

const PlantasComponent = ({ PlantasData }: { PlantasData: PlantasType }) => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const openFullscreen = (image: string) => {
        setSelectedImage(image);
    };

    const closeFullscreen = () => {
        setSelectedImage(null);
    };

    const renderIcon = useCallback((description: string) => {
        switch (description) {
            case 'Sol':
                return <House className="text-amber-500" />;
            case 'Água':
                return <Shower className="text-blue-500" />;
            case 'Terra':
                return <Bed className="text-red-500" />;
            default:
                return null;
        }
    }, []);

    const renderIconItem = useCallback((icon: string) => {
        switch (icon) {
            case "bed":
                return <Bed size={20} color="currentColor" weight="light" />;
            case "shower":
                return <Shower size={20} color="currentColor" weight="light" />;
            case "house":
                return <House size={20} color="currentColor" weight="light" />;
            default:
                return null;
        }
    }, []);

    return (
        <>
            <section className="w-full h-auto py-20 md:py-28 lg:py-40 bg-zinc-950 flex flex-col md:gap-28 gap-20 justify-center items-center">
                <div className="flex flex-col items-center relative before:absolute before:-bottom-6 before:left-30 before:w-36 before:h-1 before:rounded-lg before:bg-gradient-to-r before:from-amber-500 before:to-red-500 z-10">
                    <Text as="p" className="text-amber-500 md:text-sm text-xs tracking-widest uppercase">{PlantasData.firstText}</Text>
                    <Text as="h1" className="text-zinc-100 lg:text-5xl md:text-4xl text-3xl">{PlantasData.secondText}</Text>
                </div>
                <main className="grid lg:w-[90%] md:w-[96%] w-[90%] md:grid-cols-3 items-start gap-8 md:gap-4 lg:gap-8">
                    {
                        PlantasData.plantas.map((planta, index) => (
                            <div key={index} onClick={() => openFullscreen(planta.image)}>
                                <Card className="w-full flex flex-col items-center gap-4 border border-zinc-500 transition-all duration-200 cursor-pointer hover:border-red-500/50 py-6">
                                    <div className="w-full h-64 overflow-hidden rounded-lg">
                                        <Image 
                                            image={planta.image} 
                                            alt={planta.description}
                                            className="h-full hover:scale-105 transition-transform duration-300"
                                            objectCover="object-contain"
                                        />
                                    </div>
                                    <Text as="p" className="text-zinc-300 text-center px-4 text-sm leading-relaxed">
                                        {planta.description}
                                    </Text>
                                    <div className="flex gap-2">
                                        {renderIcon(planta.description)}
                                    </div>
                                    <ul className="flex flex-col items-start gap-2 mt-4">
                                        {planta.items.map((item, index) => (
                                            <List className="flex items-center gap-2 text-zinc-300 text-sm" key={index}>
                                                <span>{renderIconItem(item.icon)}</span>
                                                {item.text}
                                            </List>
                                        ))}
                                    </ul>
                                </Card>
                            </div>
                        ))
                    }
                </main>
            </section>

            {/* Modal Fullscreen */}
            {selectedImage && (
                <div 
                    className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
                    onClick={closeFullscreen}
                >
                    <div className="relative max-w-7xl max-h-full">
                        <button
                            onClick={closeFullscreen}
                            className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-red-500 transition-colors duration-200 z-10"
                        >
                            ×
                        </button>
                        <Image 
                            image={selectedImage} 
                            alt="Planta em tela cheia"
                            className="max-w-full max-h-[90vh] rounded-lg"
                            objectCover="object-contain"
                        />
                    </div>
                </div>
            )}
        </>
    )
}

export default PlantasComponent