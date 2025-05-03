import { fadeIn, textVariant } from "@/utils/motion";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import "../../index.css";
import { portfolio } from "../data/index";
import { SectionWrapper } from '../hook';
import { styles } from "../styles/index";
import { LeftButton, RightButton } from "./carasoulButton";

const CARD_WIDTH = 400; // px

const ProjectCard = ({ index, name, description, image }) => {
    const controls = useAnimation();
    const { ref, inView } = useInView({
        threshold: 0.1,
    });

    useEffect(() => {
        if (inView) {
            controls.start("show");
        }
    }, [controls, inView]);

    return (
        <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={fadeIn("up", "spring", 0, 0.75)}
            className="flex-shrink-0 w-full md:w-[400px] h-full flex flex-col gap-5 bg-primary/50 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
            <div className='relative w-full flex justify-center items-center group'>
                <div className='w-full aspect-square flex items-center justify-center overflow-hidden rounded-lg'>
                    <img
                        src={image}
                        alt='project_image'
                        className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-110'
                    />
                </div>
            </div>

            <div className='w-full px-6 flex flex-col justify-center'>
                <h3 className='text-white font-medium text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl leading-tight mb-4'>{name}</h3>
                <p className='text-secondary text-sm sm:text-xs md:text-sm lg:text-md xl:text-lg 2xl:text-xl leading-relaxed'>{description}</p>
            </div>
        </motion.div>
    );
};

const Portfolio = () => {
    const [current, setCurrent] = useState(0);
    const cardRefs = useRef([]);

    const moveLeft = () => {
        setCurrent((prev) => (prev > 0 ? prev - 1 : portfolio.length - 1));
    };

    const moveRight = () => {
        setCurrent((prev) => (prev < portfolio.length - 1 ? prev + 1 : 0));
    };

    useEffect(() => {
        cardRefs.current[current]?.scrollIntoView({
            behavior: "smooth",
            inline: "center",
            block: "nearest"
        });
    }, [current]);

    return (
        <div className="relative">
            <div className='text-center md:text-left md:px-20 lg:px-40 mb-8'>
                <motion.div variants={textVariant()}>
                    <h2 className={`${styles.sectionText}`}>Portfolio</h2>
                </motion.div>
            </div>
            <div className="relative flex justify-center items-center pt-10">
                <div className="overflow-x-auto flex max-w-5xl px-8 gap-8 snap-x snap-mandatory scrollbar-hide">
                    {portfolio.map((project, index) => (
                        <div
                            key={index}
                            ref={el => cardRefs.current[index] = el}
                            className={`
                                snap-center flex-shrink-0 transition-transform duration-300
                                ${index === current ? 'scale-110 z-20 shadow-2xl' : 'scale-90 z-10 opacity-80'}
                            `}
                            style={{ width: CARD_WIDTH }}
                        >
                            <ProjectCard index={index} {...project} />
                        </div>
                    ))}
                </div>
                <div className="absolute left-0 top-1/2 -translate-y-1/2 z-30">
                    <LeftButton onClick={moveLeft} />
                </div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 z-30">
                    <RightButton onClick={moveRight} />
                </div>
            </div>
        </div>
    );
};

export default SectionWrapper(Portfolio, 'portfolio');