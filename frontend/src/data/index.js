import {
    crm,
    nft,
    club,
} from "../assets";

export const navLinks = [
    {
        id: "hero",
        title: "Hero",
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
        id: "contact",
        title: "Contact",
    },
];


const portfolio = [
    {
        name: "Modern Club Management Platform",
        description:
            "ClubPage is a full-stack web application designed to facilitate club management, member communication, and event organization. The platform features a real-time chat system, event management, and user authentication.",
        image: club,
    },
    {
        name: "NFT Marketplace",
        description:
            "A decentralized NFT marketplace built on the Solana blockchain, featuring a C++ backend and modern React frontend.",
        image: nft,
    },
    {
        name: "CRM",
        description:
            "A Customer Relationship Management (CRM) system built with Spring Boot backend and HTML/CSS/JavaScript frontend.",
        image: crm,
    },
];

export { portfolio };
