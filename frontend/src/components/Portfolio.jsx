import { fadeIn, textVariant } from "@/utils/motion";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "../../index.css";
import { portfolio } from "../data/index";
import { SectionWrapper } from '../hook';
import { styles } from "../styles/index";

const ProjectCard = ({ index, name, description, image, github }) => {
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
            className="w-full flex flex-col items-center"
        >
            <div className='relative w-full flex flex-col items-center shadow-md  hover:shadow-2xl hover:shadow-purple-800  hover:-translate-y-2 transition-all duration-300'>
                <img
                    src={image}
                    alt='project_image'
                    className='w-[300px] h-[200px] object-cover rounded-3xl'
                />
                <div className='mt-6 text-center w-full max-w-[300px]  font-helvetica'>
                    <h3 className='text-white font-medium text-xl md:text-2xl lg:text-3xl leading-tight'>{name}</h3>
                    <p className='mt-3 text-slate-500 text-sm md:text-base lg:text-lg'>{description}</p>
                    <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-4 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition"
                    >
                        View on GitHub
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

const Portfolio = () => {
    const loopedProjects = [...portfolio, ...portfolio, ...portfolio];

    return (
        <div className='text-center md:text-left md:px-20 lg:px-40 text-white pb-20 md:pb-32'>
            <motion.div variants={textVariant()}>
                <h2 className={`${styles.sectionText}`}>Portfolio</h2>
            </motion.div>

            <div className='mt-10 md:mt-20 relative'>
                <div className='overflow-x-auto pb-4 scrollbar-hide'>
                    <div className='flex gap-8 min-w-max px-4'>
                        {loopedProjects.map((project, index) => (
                            <div key={`project-${index}`} className='w-[300px] flex-shrink-0'>
                                <ProjectCard index={index} {...project} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionWrapper(Portfolio, "portfolio");