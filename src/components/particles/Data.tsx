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
];

export const SocialMediaLinks = [
    {name: "Facebook", url: "https://www.facebook.com/profile.php?id=100094881618902",icon: <FacebookLogo size={15} color="currentColor" weight="fill" />},
    {name: "Instagram", url: "https://www.instagram.com/doceapemrv",icon: <InstagramLogo size={15} color="currentColor" weight="fill" />}
]

export const TestimonialTexts = {
    firstText: "our testimonials",
    secondText: "What Clients Say",
    feedBacks: [
        {
            text: "I've been a member for six months, and the gym's supportive community and knowledgeable trainers have helped me surpass my fitness goals!",
            person: "Darrell Murray",
            type: "Client"
        },
        {
            text: "The Yoga classes have transformed my life; I feel more centered, strong, and peaceful every time I step on the mat.",
            person: "Derrick Rodriquez",
            type: "Client"
        },
        {
            text: "Attending the Special Class has been a game-changer! It's intense, but the results are incredible. Highly recommended!",
            person: "Collins Thompson",
            type: "Client"
        }
    ],
}

export const BlogTexts = {
    firstText: "Get informed",
    secondText: "Our Latest News",
    blogNews: [
        {
            caption: "Yoga",
            title: "Do your self realizations quickly fade",
            paragraph: "Discover the transformative power of yoga as we explore its numerous physical and mental benefits. From increased flexibility and strength to reduced stress and enhanced mindfulness, our yoga classes cater to practitioners of all levels. Join us on the mat and experience the harmony of mind, body, and soul.",
            time: "1m",
            author: "Ralph Cruz",
            comments: "21"
        },
        {
            caption: "Trainers & Equipment",
            title: "Little Things Do make a difference",
            paragraph: "At our gym, we take pride in our exceptional team of expert trainers who are passionate about guiding you on your fitness journey. With their knowledge and personalized approach, you'll receive the support you need to achieve your fitness goals effectively. Additionally, we offer state-of-the-art equipment that's designed to elevate your workouts and provide a holistic fitness experience like no other.",
            time: "15m",
            author: "Bruce Charles",
            comments: "45"
        },
        {
            caption: "Procrastination",
            title: "The Time is Now",
            paragraph: "Procrastination can be a common obstacle on the path to achieving our goals. In this blog, we delve into effective strategies to overcome procrastination and increase productivity. From time management techniques to staying motivated, we're here to help you take charge of your goals and embrace a more focused and fulfilling life. It's time to seize the day and make your dreams a reality!",
            time: "19m",
            author: "Steve Wagner",
            comments: "55"
        }
    ]
}