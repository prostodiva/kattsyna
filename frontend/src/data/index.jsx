import React from "react";
import { FaCss3, FaReact, FaNodeJs, FaJava, FaDocker } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { RiJavascriptFill } from "react-icons/ri";
import { SiSpringboot, SiRedux, SiCplusplus } from "react-icons/si";
import { DiPostgresql, DiMysql, DiMongodb } from "react-icons/di";
import { CiLinkedin } from "react-icons/ci";

import {
    briefs,
    club,
    crm,
    nft,
    chatbot
} from "../assets";

const profile = {
    image: <CiLinkedin />,
    name: "Margarita Kattsyna",
    email: "kattsyna@gmail.com"
};

const resume = {
    title: "Resume"
};

export const navLinks = [
    {
        id: "hero",
        title: "Home",
    },
    {
        id: "portfolio",
        title: "Portfolio",
    },
    {
        id: "experience",
        title: "Experience",
    },
    {
        id: "skills",
        title: "Skills",
    },
    {
        id: "contact",
        title: "HireMe",
    },
];


const portfolio = [
    {
        name: "Modern Club Management Platform",
        description:
            "ClubPage is a full-stack web application designed to facilitate club management, member communication, and event organization. The platform features a real-time chat system, event management, and user authentication.",
        image: club,
        github: "https://github.com/prostodiva/clubPage",
    },
    {
        name: "NFT Marketplace",
        description:
            "A decentralized NFT marketplace built on the Solana blockchain, featuring a C++ backend and modern React frontend.",
        image: nft,
        github: "https://github.com/prostodiva/nftUsingAPI",
    },
    {
        name: "Dev-Briefs",
        description: "Rita's Tech Journey: From Code to Career",
        image: briefs,
        project_URL: "https://dev-briefs.com/",
        github: "https://github.com/prostodiva/dev-briefs",
    },
    {
        name: "CRM",
        description:
            "A Customer Relationship Management (CRM) system built with Spring Boot backend and HTML/CSS/JavaScript frontend.",
        image: crm,
        github: "https://github.com/prostodiva/CRM",
    },
    {
        name: "AI-assistant",
        description:
        "A full-stack web application that combines AI chatbot capabilities with Google Calendar integration, enabling users to manage their schedule through natural language conversations.",
        image: chatbot,
        github: "https://github.com/prostodiva/chatbot-v2",
    }
];

const skills = [
    {
        icon: <FaCss3 />,
        title: "HTML/CSS",
        description: "Web Markup and Styling",
        category: "Frontend",
    },
    {
        icon: <FaReact />,
        title: "React",
        description: "Frontend Framework",
        category: "Frontend",
    },
    {
        icon: <FaNodeJs />,
        title: "NodeJS",
        description: "Backend Runtime",
        category: "Backend",
    },
    {
        icon: "express",
        title: "Express",
        description: "Backend Framework",
        category: "Backend",
    },
    {
        icon: <SiSpringboot />,
        title: "Spring",
        description: "Backend Framework",
        category: "Backend",
    },
    {
        icon: <DiPostgresql />,
        title: "PostgreSQL",
        description: "Relational Database",
        category: "Other Tools",
    },
    {
        icon: <SiCplusplus />,
        title: "C++",
        description: "OOP Language",
        category: "Backend",
    },
    {
        icon: <FaJava />,
        title: "Java",
        description: "OOP Language",
        category: "Backend",
    },
    {
        icon: <RiJavascriptFill />,
        title: "JavaScript",
        description: "Dynamic Language",
        category: "Frontend",
    },
    {
        icon: <FaDocker />,
        title: "Docker",
        description: "Container Management",
        category: "Other Tools",
    },
    {
        icon: <BiLogoTypescript />,
        title: "TypeScript",
        description: "Type-Save JavaScript",
        category: "Frontend",
    },
    {
        icon: <DiMysql />,
        title: "MySQL",
        description: "Relational Database",
        category: "Other Tools",
    },
    {
        icon: <DiMongodb />,
        title: "MongoDB",
        description: "Database",
        category: "Other Tools",
    },
    {
        icon: <SiRedux />,
        title: "Redux",
        description: "State Management",
        category: "Other Tools",
    }
];


export { profile, resume, portfolio, skills };
