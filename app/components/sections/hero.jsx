import { HeroCarousal } from "../hero-carousal";

export const Hero = () => {
    // Define slide data here as it's static content
    const slides = [
        {
            text: "Charity is a continuous process toward success and happiness.",
            imageSrc: "/carousel-1.jpg"
        },
        {
            text: "Help us make a difference in the lives of those in need.",
            imageSrc: "/carousel-2.jpg"
        },
        {
            text: "Together we can create a better world for everyone.",
            imageSrc: "/carousel-3.jpg"
        }
    ];

    return <HeroCarousal slides={slides} />;
};