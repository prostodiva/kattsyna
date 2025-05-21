import { linkedIn, resumePDF } from "@/assets";
import { styles } from "@/styles";
import { textVariant } from "@/utils/motion";
import { motion } from "framer-motion";
import React from "react";
import SectionWrapper from "../hook/SectionWrapper";

const ProfileCard = ({ image, name, email }) => {
    return (
        <div className="bg-secondary h-60 w-60 rounded-2xl flex flex-col items-center justify-center shadow-md  hover:shadow-2xl hover:shadow-purple-800  hover:-translate-y-2 transition-all duration-300">
            <div className="mb-1 text-4xl text-red-500">{image}</div>
            <h3 className="text-white text-xl font-bold mb-2">{name}</h3>
            <p className="text-gray-300 text-sm">{email}</p>
        </div>
    );
};

const profile = {
    image: <img src={linkedIn} alt="me" className="w-8 h-8" />,
    name: "Margarita Kattsyna",
    email: "kattsyna@gmail.com"
};

const ResumeCard = ({ title, onDownload }) => {
    return (
        <div className="bg-secondary h-60 w-60 rounded-2xl flex flex-col items-center justify-center shadow-md hover:shadow-2xl hover:shadow-purple-800 hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-white text-xl font-bold mb-1">{title}</h3>
        </div>
    );
};

const resume = {
    title: "Resume"
};

const Contact = () => {
    const handleClick = (e) => {
        e.preventDefault(); // Prevent immediate download
        // const confirmed = window.confirm("Would you like to open my resume?");
        // if (confirmed) {
            window.location.href = resumePDF;
        // }
    };

    return (
        <div className="w-full px-4 py-0 pb-32 -mt-20">
            <div className='text-center md:text-left md:px-20 lg:px-40 text-white pb-20 md:pb-32 -mt-20'>
                <motion.div variants={textVariant()}>
                    <h2 className={`${styles.sectionText}`}>Hire Me</h2>
                </motion.div>
            </div>
            <h2 className="text-white text-4xl font-bold mb-8 text-center font-helvetica">I am always up for a chat. Feel free to reach out.</h2>

            <div className="flex flex-col md:flex-row justify-center gap-6 w-full max-w-5xl mx-auto">
                <div className="grid grid-cols-1 gap-6">
                    <a href="https://www.linkedin.com/in/margarita-kattsyna/" target="_blank" rel="noopener noreferrer" className="block">
                        <ProfileCard {...profile} />
                    </a>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <a href="#" onClick={handleClick} className="block">
                        <ResumeCard {...resume} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SectionWrapper(Contact, "contact");