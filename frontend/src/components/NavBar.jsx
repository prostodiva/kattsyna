import React from "react";
import { useEffect, useRef, useState} from "react";
import { navLinks } from "../data/index";

const NavBar = ({ children }) => {
    const [active, setActive] = useState("hero");
    const [toggle, setToggle] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setScrolled(scrollTop > 100);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const sections = document.querySelectorAll("div[id]");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id);
                    }
                });
            },
            {
                threshold: 0.2,
                rootMargin: '0px 0px -50% 0px'
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => sections.forEach((section) => observer.unobserve(section));
    }, []);


    return (
        <nav className="w-full fixed z-50 top-0 bg-transparent p-8 sm:px-16 sm:py-6 ">
            <div className="pl-28">
                <ul className='list-none hidden sm:flex flex-row gap-5'>
                    {navLinks.map((nav) => (
                        <li
                            key={nav.id}
                            className={`relative flex items-center ${
                                active === nav.id ? "text-white" : "text-slate-500"
                            } hover:text-white text-[18px] lg:text-[24px] font-bold pointer-events-auto cursor-pointer `}
                            onClick={() => setActive(nav.id)}
                        >
                            {active === nav.id && (
                                <div className="fixed left-40 w-2 h-6 lg:h-8 bg-quaternary"></div>
                            )}
                            <a href={`#${nav.id}`}>{nav.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;