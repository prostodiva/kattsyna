import { textVariant } from "@/utils/motion";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import "../../index.css";
import ProjectCard from "../components/ProjectCard";
import { portfolio } from "../data";
import { SectionWrapper } from '../hook';
import { styles } from "../styles/index";

const Portfolio = () => {
    const scrollContainerRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const loopedProjects = [...portfolio, ...portfolio, ...portfolio];

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
            updateScrollButtons();
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
            updateScrollButtons();
        }
    };

    const updateScrollButtons = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
        }
    };

    return (
        <div className='text-center md:text-left md:px-20 lg:px-40 text-white pb-20 md:pb-32 -mt-10'>
            <motion.div variants={textVariant()}>
                <h2 className={`${styles.sectionText}`}>Portfolio</h2>
            </motion.div>

            <div className='mt-12 md:pt-20 relative'>
                {/* Navigation Buttons */}
                <div className="flex justify-between items-center mb-4">
                    <button
                        onClick={scrollLeft}
                        disabled={!canScrollLeft}
                        className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                            canScrollLeft 
                                ? 'bg-secondary hover:bg-quaternary text-white' 
                                : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                        }`}
                        aria-label="Scroll left"
                    >
                        ← Previous
                    </button>
                    
                    <button
                        onClick={scrollRight}
                        disabled={!canScrollRight}
                        className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                            canScrollRight 
                                ? 'bg-secondary hover:bg-quaternary text-white' 
                                : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                        }`}
                        aria-label="Scroll right"
                    >
                        Next →
                    </button>
                </div>

                {/* Portfolio Cards Container */}
                <div
                    ref={scrollContainerRef}
                    className='overflow-x-auto pb-4 scrollbar-hide'
                    style={{ scrollBehavior: 'smooth' }}
                    onScroll={updateScrollButtons}
                >
                    <div className='flex gap-8 min-w-max px-4'>
                        {loopedProjects.map((project, index) => (
                            <div key={`project-${index}`} className='w-[300px] flex-shrink-0'>
                                <ProjectCard index={index} {...project} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Scroll Indicators */}
                <div className="flex justify-center mt-4 space-x-2">
                    {Array.from({ length: Math.ceil(loopedProjects.length / 4) }, (_, i) => (
                        <button
                            key={i}
                            onClick={() => {
                                if (scrollContainerRef.current) {
                                    scrollContainerRef.current.scrollTo({
                                        left: i * 1200, // 4 cards * 300px width + gaps
                                        behavior: 'smooth'
                                    });
                                }
                            }}
                            className="w-3 h-3 rounded-full bg-gray-600 hover:bg-quaternary transition-colors"
                            aria-label={`Go to page ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SectionWrapper(Portfolio, "portfolio");