
import { useScrollAnimation } from "@/hook";
import { motion } from "framer-motion";
import SectionWrapper from '../hook/SectionWrapper';

const Experience = () => {
    const { ref, scrollVariants, initial, whileInView, viewport } = useScrollAnimation({
        y: 50,
        duration: 0.6,
        delay: 0.2
    });

    return (
        <div className='text-center md:text-left px-4 md:px-20 lg:px-40 text-white pb-20 md:pb-32 pt-10 md:-mt-10'>
            <motion.div
                ref={ref}
                variants={scrollVariants}
                initial={initial}
                whileInView={whileInView}
                viewport={viewport}
            >
                <h2 className="text-white font-bold text-3xl sm:text-4xl md:text-[80px] sm:text-[50px] text-[40px]">Experience</h2>

                <div className='mt-4 md:pt-5 flex flex-col gap-6 sm:gap-8 relative z-20'>
                    <div className='bg-secondary p-4 sm:p-8 rounded-3xl shadow-md hover:shadow-2xl hover:shadow-purple-800 hover:-translate-y-2 transition-all duration-300'>
                        <h3 className='text-white text-xl sm:text-2xl font-bold mb-3 sm:mb-4'>Software Engineer</h3>
                        <p className='text-slate-500 text-sm sm:text-base'>Full-stack development with focus on React, Node.js, and modern web technologies.<br />
                                                                            Building scalable web applications and implementing efficient solutions.
                        </p>
                    </div>
                    
                    <div className="bg-secondary p-4 sm:p-8 rounded-3xl shadow-md hover:shadow-2xl hover:shadow-purple-800 hover:-translate-y-2 transition-all duration-300">
                        <h3 className='text-white text-xl sm:text-2xl font-bold mb-3 sm:mb-4'>Leadership</h3>
                        <p className='text-slate-500 text-sm sm:text-base'>Organized and led a LeetCode study group, helping classmates remain consistent and motivated in their practice.</p>
                    </div>

                    <div className='bg-secondary p-4 sm:p-8 rounded-3xl shadow-md hover:shadow-2xl hover:shadow-purple-800 hover:-translate-y-2 transition-all duration-300'>
                        <h3 className='text-white text-xl sm:text-2xl font-bold mb-3 sm:mb-4'>CS Tutor - Glendale Community College</h3>
                        <p className='text-slate-500 text-sm sm:text-base'>Provided support to computer science students to strengthen their understanding of core concepts and enhance their coding skills.
                        </p>
                    </div>

                    <div className='bg-secondary p-4 sm:p-8 rounded-3xl shadow-md hover:shadow-2xl hover:shadow-purple-800 hover:-translate-y-2 transition-all duration-300'>
                        <h3 className='text-white text-xl sm:text-2xl font-bold mb-3 sm:mb-4'>Software Engineering Intern</h3>
                        <p className='text-slate-500 text-sm sm:text-base'>Contributed 11 merged PRs across iOS platform<br />Resolved 10+ critical UX bugs<br />
                                                                          Delivered 25+ commits across 97 files while maintaining clean architecture and code quality
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default SectionWrapper(Experience, "experience");