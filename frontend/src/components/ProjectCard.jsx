import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
import {useEffect} from "react";
import {fadeIn} from "@/utils/motion";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ index, name, description, image, github, project_URL}) => {
    const controls = useAnimation();
    const { ref, inView } = useInView({
        threshold: 0.1,
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
                        className="flex items-center mt-4 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition"
                        onClick={handleClick}
                    >
                        <FaGithub className="mr-4" />
                        View on GitHub
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;