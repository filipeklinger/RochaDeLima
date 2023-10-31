import { SocialMediaLinks } from "../particles/Data";

const StickyIcons = () => {
    return (
        <aside className="fixed lg:bottom-0 bottom-1/2 left-0  flex flex-col gap-5 items-center bg-gradient-to-t z-40 from-red-500 to-amber-500 rounded-e-lg py-3 px-2 ">
            {SocialMediaLinks.map((link, index) => (
                <a href={link.url} className="text-zinc-100 hover:text-zinc-900" key={index}>
                    {link?.icon}
                </a>
            ))}
        </aside>
    )
}

export default StickyIcons