import { fadeIn, textVariant } from "@/utils/motion";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import "../../index.css";
import { portfolio } from "../data/index";
import { SectionWrapper } from '../hook';
import { styles } from "../styles/index";

const ProjectCard = ({ index, name, description, image, github, project_URL}) => {
    const controls = useAnimation();
    const { ref, inView } = useInView({
        threshold: 0.1,
    });
    const [count, setCount] = useState(() => {
        // Initialize from localStorage or 0 if not found
        const savedCount = localStorage.getItem(`github-click-count-${name}`);
        return savedCount ? parseInt(savedCount) : 0;
    });

    const handleClick = () => {
        const newCount = count + 1;
        setCount(newCount);
        // Save to localStorage with project name as key
        localStorage.setItem(`github-click-count-${name}`, newCount.toString());
    }

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
            <div className='relative w-full flex flex-col items-center shadow-md hover:shadow-2xl hover:shadow-purple-800 hover:-translate-y-2 transition-all duration-300'>
                <a
                    href={project_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="dev-briefs project link"
                >
                    <img
                        src={image}
                        alt='project_image'
                        className='w-[300px] h-[200px] object-cover rounded-3xl'
                    />
                </a>
                <div className='mt-6 text-center w-full max-w-[300px] font-helvetica'>
                    <h3 className='text-white font-medium text-xl md:text-2xl lg:text-3xl leading-tight'>{name}</h3>
                    <p className='mt-3 text-slate-500 text-sm md:text-base lg:text-lg'>{description}</p>
                    <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="My github project repo"
                        className="inline-block mt-4 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition"
                        onClick={handleClick}
                    >
                        View on GitHub
                    </a>
                    <div>show count: {count}</div>
                </div>
            </div>
        </motion.div>
    );
};

const Portfolio = () => {
    const scrollContainerRef = useRef(null);
    const loopedProjects = [...portfolio, ...portfolio, ...portfolio];

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;
        if (!scrollContainer) return;

        const handleWheel = (e) => {
            if (e.deltaY !== 0) {
                e.preventDefault();
                scrollContainer.scrollLeft += e.deltaY;
            }
        };

        scrollContainer.addEventListener('wheel', handleWheel, { passive: false });
        return () => scrollContainer.removeEventListener('wheel', handleWheel);
    }, []);

    return (
        <div className='text-center md:text-left md:px-20 lg:px-40 text-white pb-20 md:pb-32 -mt-10'>
            <motion.div variants={textVariant()}>
                <h2 className={`${styles.sectionText}`}>Portfolio</h2>
            </motion.div>

            <div className='mt-12 md:mt-20 relative'>
                <div
                    ref={scrollContainerRef}
                    className='overflow-x-auto pb-4 scrollbar-hide'
                    style={{ scrollBehavior: 'smooth' }}
                >
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