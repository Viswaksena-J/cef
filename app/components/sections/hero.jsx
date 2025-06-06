import { HeroCarousal } from "../hero-carousal";

export const Hero = () => {
    const slides = [
        {
            text: "Food. Education. Dignity.",
            imageSrc: "/gettyimages-509299878-612x612.jpg"
        },
        {
            text: "For every hungry child, a chance to learn.",
            imageSrc: "/carousel-2.jpg"
        },
        {
            text: "Help a child rise — with meals and books",
            imageSrc: "/carousel-3.jpg"
        }
    ];

    return <HeroCarousal slides={slides} />;
};