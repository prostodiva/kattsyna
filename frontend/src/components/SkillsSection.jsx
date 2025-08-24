import { skills } from "@/data";
import React from "react";
import SectionWrapper from '../hook/SectionWrapper';
import SkillCard from "./SkillCard";

const SkillsSection = () => {
    return (
        <div className="w-full px-4 py-0 pb-64 -mt-20">
            <div className='text-center md:text-left md:px-20 lg:px-40 text-white'>
                <h2 className="text-white font-bold md:text-[80px] sm:text-[50px] text-[40px]">Skills</h2>
            </div>

            <h2 className="text-white text-4xl font-bold mb-8 text-center">Backend</h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 w-full max-w-5xl mx-auto">
                {skills
                    .filter(skill => skill.category === "Backend")
                    .map((skill, idx) => (
                        <SkillCard key={idx} {...skill} />
                    ))}
            </div>

            <h2 className="text-white text-4xl font-bold mb-5 text-center mt-5">Frontend</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full max-w-5xl mx-auto">
                {skills
                    .filter(skill => skill.category === "Frontend")
                    .map((skill, idx) => (
                        <SkillCard key={idx} {...skill} />
                    ))}
            </div>

            <h2 className="text-white text-4xl font-bold mb-5 text-center mt-5">Other Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 w-full max-w-4xl mx-auto">
                {skills
                    .filter(skill => skill.category === "Other Tools")
                    .map((skill, idx) => (
                        <SkillCard key={idx} {...skill} />
                    ))}
            </div>
        </div>
    );
};

export default SectionWrapper(SkillsSection, "skillsSection");