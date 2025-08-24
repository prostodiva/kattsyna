import { resumePDF } from "@/assets";
import { styles } from "@/styles";
import { textVariant } from "@/utils/motion";
import { motion } from "framer-motion";
import React from "react";
import ProfileCard from "../components/ProfileCard";
import ResumeCard from "../components/ResumeCard";
import { profile, resume } from "../data/index";
import SectionWrapper from "../hook/SectionWrapper";

const Contact = () => {
    const handleClick = (e) => {
        e.preventDefault();

        window.location.href = resumePDF;
    };

    return (
        <div className="w-full px-4 py-0 pb-32 -mt-20">
            <div className='text-center md:text-left md:px-20 lg:px-40 text-white pb-20 md:pb-32'>
                <motion.div variants={textVariant()}>
                    <h2 className={`${styles.sectionText}`}>Hire Me</h2>
                </motion.div>
            </div>
            <h2 className="text-white text-4xl font-bold mb-8 text-center font-helvetica">I am always up for a chat. Feel free to reach out.</h2>

            <div className="flex flex-col md:flex-row justify-center gap-6 w-full max-w-5xl mx-auto">
                <div className="grid grid-cols-1 gap-6">
                    <a href="https://www.linkedin.com/in/margarita-kattsyna/" target="_blank" rel="noopener noreferrer" className="block" aria-label="My linkedIn profile">
                        <ProfileCard {...profile} />
                    </a>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <a href="#" onClick={handleClick} className="block" aria-label="View and download my resume">
                        <ResumeCard {...resume} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SectionWrapper(Contact, "contact");