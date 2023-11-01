import { Text } from "../atoms/Text"

export type PromotionalVideoTextsType = {
    firstText: string;
    paragraph?: string;
    videoUrl: string;
}
export default function PromotionalVideo({ PromotionalVideoTexts }: { PromotionalVideoTexts: PromotionalVideoTextsType }) {

    return (
        <section className="w-full min-h-sceen md:min-h-[1000px] relative pt-14">
            <div className="flex flex-col justify-center items-center">
                <Text as="h1" className="text-zinc-100 lg:text-5xl md:text-4xl text-3xl text-center">{PromotionalVideoTexts.firstText}</Text>
                {PromotionalVideoTexts.paragraph && <Text as="p" className="text-amber-500 lg:text-sm text-xs tracking-widest uppercase font-medium pl-1 pr-1">{PromotionalVideoTexts.paragraph}</Text>}
            </div>
            <div className="flex flex-col justify-center items-center pt-10 mb-5">
                <iframe className="w-full md:w-3/4 aspect-video"
                    src={PromotionalVideoTexts.videoUrl}
                    title={PromotionalVideoTexts.firstText}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
                    allowFullScreen>
                </iframe>
            </div>
        </section>
    )
}