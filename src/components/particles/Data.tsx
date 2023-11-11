import { FacebookLogo, InstagramLogo } from "@phosphor-icons/react";
export const NavLinks: {
    name: string;
    url: string;
    type: "Building" | "House" ;
}[] = [
    {
        name: "Aurea Residencial",
        url: "/aurea-residencial",
        type: "Building"
    },
    {
        name: "Conquista Residencial",
        url: "/conquista-residencial",
        type: "Building"
    },
    {
        name: "Beija-flor Residencial",
        url: "/beija-flor-residencial",
        type: "House"
    },
    {
        name: "Morada Da colina",
        url: "/morada-da-colina",
        type: "Building"
    },
];

export const SocialMediaLinks = [
    {name: "Facebook", url: "https://www.facebook.com/profile.php?id=100094881618902",icon: <FacebookLogo size={15} color="currentColor" weight="fill" />},
    {name: "Instagram", url: "https://www.instagram.com/doceapemrv",icon: <InstagramLogo size={15} color="currentColor" weight="fill" />}
]