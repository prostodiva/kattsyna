import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { portfolio } from "../data/index";
import { SectionWrapper } from '../hook';
import { styles } from "../styles/index";
import { fadeIn, textVariant } from "@/utils/motion";
import "../../index.css";

const ProjectCard = ({
                         index,
                         name,
                         description,
                         image,
                     }) => {
    const controls = useAnimation();
    const { ref, inView } = useInView({
        threshold: 0.1,
    });

    useEffect(() => {
        if (inView) {
            controls.start("show");
        }
    }, [controls, inView]);

    const isEven = index % 2 === 0;

    return (
        <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={fadeIn("up", "spring", 0, 0.75)}
            className={`w-full mt-[-2px] flex flex-col md:flex-row ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-5`}
        >
            <div className='relative w-full md:w-1/3 flex justify-center items-center'>
                <div className='w-full aspect-square flex items-center justify-center overflow-hidden'>
                    <img
                        src={image}
                        alt='project_image'
                        className='w-full h-full object-contain'
                    />
                </div>
            </div>

            <div className={`w-full md:w-2/3 px-6 md:p-16 flex flex-col justify-center ${isEven ? "text-left md:text-left" : "text-left md:text-right"}`}>
                <h3 className='text-white font-medium text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl leading-tight'>{name}</h3>
                <p className='mt-4 text-secondary text-sm sm:text-xs md:text-sm lg:text-md xl:text-lg 2xl:text-xl'>{description}</p>
            </div>
        </motion.div>
    );
};


const Portfolio = () => {
    return (
        <div className='text-center md:text-left md:px-20 lg:px-40'>
            <motion.div variants={textVariant()}>
                <h2 className={`${styles.sectionText}`}>Portfolio</h2>
            </motion.div>

            <div className='mt-10 md:mt-20 flex flex-col gap-10 md:gap-20'>
                {portfolio.map((project, index) => (
                    <ProjectCard key={`project-${index}`} index={index} {...project} />
                ))}
            </div>
        </div>
    );
};

export default SectionWrapper(Portfolio, 'portfolio');