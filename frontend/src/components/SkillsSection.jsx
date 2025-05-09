import React, { useEffect, useState } from "react";
import SectionWrapper from '../hook/SectionWrapper';
import {motion} from "framer-motion";
import {textVariant} from "@/utils/motion";
import {styles} from "@/styles";
import {java, spring, express, nodejs, postgres, reactLogo, docker, css, c, javascript, type, sql} from "@/assets";

const SkillCard = ({ icon, title, description}) => {
    return (
        <div className="bg-secondary h-40 rounded-2xl flex flex-col items-center justify-center shadow-md  hover:shadow-2xl hover:shadow-purple-800  hover:-translate-y-2 transition-all duration-300">
            <div className="mb-1 text-4xl text-red-500">{icon}</div>
            <h3 className="text-white text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-300 text-sm">{description}</p>
        </div>
    );
};

const skills = [
    {
        icon: <img src={css} alt="CSS" className="w-8 h-8" />,
        title: "HTML/CSS",
        description: "Web Markup and Styling",
        category: "Frontend",
    },
    {
        icon: <img src={reactLogo} alt="React" className="w-8 h-8" />,
        title: "React",
        description: "Frontend Framework",
        category: "Frontend",
    },
    {
        icon: <img src={nodejs} alt="Nodejs" className="w-8 h-8" />,
        title: "NodeJS",
        description: "Backend Runtime",
        category: "Backend",
    },
    {
        icon: <img src={express} alt="Express" className="w-8 h-8" />,
        title: "Express",
        description: "Backend Framework",
        category: "Backend",
    },
    {
        icon: <img src={spring} alt="Spring" className="w-8 h-8" />,
        title: "Spring",
        description: "Backend Framework",
        category: "Backend",
    },
    {
        icon: <img src={postgres} alt="Postgres" className="w-8 h-8" />,
        title: "PostgreSQL",
        description: "Relational Database",
        category: "Other Tools",
    },
    {
        icon: <img src={c} alt="C++" className="w-8 h-8" />,
        title: "C++",
        description: "Object-Oriented Programming Language",
        category: "Backend",
    },
    {
        icon: <img src={java} alt="Java" className="w-8 h-8" />,
        title: "Java",
        description: "Object-Oriented Programming Language",
        category: "Backend",
    },
    {
        icon: <img src={javascript} alt="JavaScript" className="w-8 h-8" />,
        title: "JavaScript",
        description: "Object-Oriented Programming Language",
        category: "Frontend",
    },
    {
        icon: <img src={docker} alt="Docker" className="w-8 h-8" />,
        title: "Docker",
        description: "Container Management",
        category: "Other Tools",
    },
    {
        icon: <img src={type} alt="TypeScript" className="w-8 h-8" />,
        title: "TypeScript",
        description: "Type-Save JavaScript",
        category: "Frontend",
    },
    {
        icon: <img src={sql} alt="MySQL" className="w-8 h-8" />,
        title: "MySQL",
        description: "Relational Database",
        category: "Other Tools",
    }
];

const SkillsSection = () => {
    return (
        <div className="w-full px-4 py-12">
            <div className='text-center md:text-left md:px-20 lg:px-40 text-white pb-20 md:pb-32'>
                <motion.div variants={textVariant()}>
                    <h2 className={`${styles.sectionText}`}>Skills</h2>
                </motion.div>
            </div>

            <h2 className="text-white text-4xl font-bold mb-8 text-center">Backend</h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 w-full max-w-5xl mx-auto">
                {skills
                    .filter(skill => skill.category === "Backend")
                    .map((skill, idx) => (
                        <SkillCard key={idx} {...skill} />
                    ))}
            </div>

            <h2 className="text-white text-4xl font-bold mb-8 text-center">Frontend</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full max-w-5xl mx-auto">
                {skills
                    .filter(skill => skill.category === "Frontend")
                    .map((skill, idx) => (
                        <SkillCard key={idx} {...skill} />
                    ))}
            </div>

            <h2 className="text-white text-4xl font-bold mb-8 text-center">Other Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mx-auto">
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