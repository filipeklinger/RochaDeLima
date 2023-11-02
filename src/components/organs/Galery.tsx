import { Text } from "../atoms/Text"
import Slider from "react-slick";
import { Card } from "../molecules/Card";
import { Image } from "../atoms/Image";

type GaleryTextsType = {
    firstText: string;
    secondText: string;
    photos: string[];
}
const Galery = ({ GaleryTexts }: { GaleryTexts: GaleryTextsType }) => {
    // Slider settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        cssEase: "linear",
        nextArrow: <br />,
        prevArrow: <br />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    dots: false,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                },
            },
        ],
    };

    return (
        <section className="w-full h-auto flex items-center bg-zinc-950">
            <main className="w-full lg:min-h-[800px] md:min-h-[700px] flex flex-col justify-center items-center gap-10 md:gap-10 py-12 md:py-0">

                <div className="flex flex-col mt-10 items-center relative before:absolute before:-bottom-6 before:left-30 before:w-20 before:h-1 before:rounded-lg before:bg-gradient-to-r before:from-amber-500 before:to-red-500 z-10">
                    <Text as="p" className="text-amber-500 lg:text-sm text-xs tracking-widest uppercase font-medium">{GaleryTexts.firstText}</Text>
                    <Text as="h1" className="text-zinc-100 lg:text-5xl md:text-4xl text-3xl text-center">{GaleryTexts.secondText}</Text>
                </div>

                <div className="w-full lg:px-8 md:px-2 h-auto mt-4">
                    <Slider {...settings}>
                        {
                            GaleryTexts.photos.map((photo, index) => (
                                <div key={index} className="lg:px-6 md:px-4 w-full px-3">
                                    <Card className="bg-zinc-800 w-full h-full border-[0.01rem] border-amber-500/30">

                                        <Image className="col-span-2" objectCover="object-cover" image={photo} alt={'photo.title' + index} />
                                    </Card>
                                </div>

                            ))
                        }
                    </Slider>
                </div>

            </main>

        </section>
    )
}

export default Galery;