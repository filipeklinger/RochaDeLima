import About from "../organs/About"
import Blogs from "../organs/Blogs"
import Calculator from "../organs/Calculator"
import Contact from "../organs/Contact"
import HeroSection from "../organs/HeroSection"
import Membership from "../organs/Membership"
import Offers from "../organs/Offers"
import Testimonials from "../organs/Testimonials"

import HeroImg1 from "../../assets/hero/1.png";
import HeroImg2 from "../../assets/hero/2.png";
import HeroImg3 from "../../assets/hero/3.png";

const Home = () => {
    const HeroTexts = [
        {
            Heading: "string",
            Paragraph: "string",
            Button: "string",
            image: HeroImg1,
        },
        {
            Heading: "string",
            Paragraph: "string",
            Button: "string",
            image: HeroImg2,
        },
        {
            Heading: "string",
            Paragraph: "string",
            Button: "string",
            image: HeroImg3,
        }
    ];
    return (
        <>
            <HeroSection HeroTexts={HeroTexts} />
            <About />
            <Offers />
            <Membership />
            <Calculator />
            <Testimonials />
            <Blogs />
            <Contact />
        </>
    )
}

export default Home