import { skills } from "@/data";
import { motion } from "framer-motion";
import React from "react";
import { useScrollAnimation } from '../hook';
import SectionWrapper from '../hook/SectionWrapper';
import SkillCard from "./SkillCard";

const SkillsSection = () => {
    const { ref, scrollVariants, initial, whileInView, viewport } = useScrollAnimation({
        y: 30,
        duration: 0.8,
        delay: 0.1
    });

    return (
        <div className="w-full px-4 py-0 pb-32 sm:pb-64 pt-10 md:-mt-10 relative z-10">
            <motion.div
                ref={ref}
                variants={scrollVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="relative z-20"
            >
                <div className='text-center md:text-left md:px-20 lg:px-40 text-white mb-8'>
                    <h2 className="text-white font-bold text-3xl sm:text-4xl md:text-[80px] sm:text-[50px] text-[40px]">Skills</h2>
                </div>

                <h2 className="text-white text-2xl sm:text-4xl font-bold mb-6 sm:mb-8 text-center">Backend</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 w-full max-w-5xl mx-auto mb-8">
                    {skills
                        .filter(skill => skill.category === "Backend")
                        .map((skill, idx) => (
                            <SkillCard key={idx} {...skill} />
                        ))}
                </div>

                <h2 className="text-white text-2xl sm:text-4xl font-bold mb-6 sm:mb-8 text-center">Frontend</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 w-full max-w-5xl mx-auto mb-8">
                    {skills
                        .filter(skill => skill.category === "Frontend")
                        .map((skill, idx) => (
                            <SkillCard key={idx} {...skill} />
                        ))}
                </div>

                <h2 className="text-white text-2xl sm:text-4xl font-bold mb-6 sm:mb-8 text-center">Other Tools</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 w-full max-w-4xl mx-auto">
                    {skills
                        .filter(skill => skill.category === "Other Tools")
                        .map((skill, idx) => (
                            <SkillCard key={idx} {...skill} />
                        ))}
                </div>
            </motion.div>
        </div>
    );
};

export default SectionWrapper(SkillsSection, "skillsSection");