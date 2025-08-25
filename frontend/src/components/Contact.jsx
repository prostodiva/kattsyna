import { resumePDF } from "@/assets";
import { motion } from 'framer-motion';
import React from "react";
import ProfileCard from "../components/ProfileCard";
import ResumeCard from "../components/ResumeCard";
import { profile, resume } from "../data/index";
import { useScrollAnimation } from '../hook';
import SectionWrapper from "../hook/SectionWrapper";

const Contact = () => {
    const { ref, scrollVariants, initial, whileInView, viewport } = useScrollAnimation({
        y: 50,
        duration: 0.6,
        delay: 0.3
    });

    const handleClick = (e) => {
        e.preventDefault();
        window.location.href = resumePDF;
    };

    return (
        <div className="w-full px-4 py-0 pb-32 sm:pb-64 -mt-10 relative z-10">
            <motion.div
                ref={ref}
                variants={scrollVariants}
                initial={initial}
                whileInView={whileInView}
                viewport={viewport}
            >
                <div className='text-center md:text-left md:px-20 lg:px-40 text-white mb-8'>
                    <h2 className="text-white font-bold text-3xl sm:text-4xl md:text-[80px] sm:text-[50px] text-[40px]">Hire Me</h2>
                </div>

                <h2 className="text-white text-2xl sm:text-4xl font-bold mb-6 sm:mb-8 text-center">Get In Touch</h2>
                <div className="flex flex-col md:flex-row justify-center items-center gap-6 w-full max-w-5xl mx-auto mb-8">
                    <div className="w-full flex justify-center">
                        <a href="https://www.linkedin.com/in/margarita-kattsyna/" target="_blank" rel="noopener noreferrer" className="block" aria-label="My linkedIn profile">
                            <ProfileCard {...profile} />
                        </a>
                    </div>

                    <div className="w-full flex justify-center">
                        <a href="#" onClick={handleClick} className="block" aria-label="View and download my resume">
                            <ResumeCard {...resume} />
                        </a>
                    </div>
                </div>

                <h2 className="text-white text-2xl sm:text-4xl font-bold mb-6 sm:mb-8 text-center">Let's Connect</h2>
                <div className="text-center text-white text-lg sm:text-xl max-w-3xl mx-auto">
                    <p>I am always up for a chat. Feel free to reach out.</p>
                </div>
            </motion.div>
        </div>
    );
};

export default SectionWrapper(Contact, "contact");